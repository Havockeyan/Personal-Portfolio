I have generated the documentation for you! 📝 You can copy the content below and save it as `failover-setup.md`. It covers everything from the Pi configuration to the "Loop-Breaker" Worker logic. 🥧🚀

---

# 🛡️ CoderKeyan Portfolio Failover System

This document outlines the architecture and configuration for hosting **coderkeyan.com** on a Raspberry Pi with an automatic failover to Vercel.

## 🏗️ 1. Primary Origin: Raspberry Pi

The primary site is hosted locally on a Raspberry Pi using Docker and exposed via a Cloudflare Tunnel.

* **Docker Service:** Runs on port `3000`.
* **Tunnel Mapping:** * **Subdomain:** `pi`
* **Domain:** `coderkeyan.com`
* **Service:** `http://localhost:3000` (or the container name).


* **Access URL:** `https://pi.coderkeyan.com`

## 🚀 2. Backup Origin: Vercel

Vercel acts as the high-availability backup if the Pi goes offline.

* **Project Link:** Connected to the GitHub repository.
* **Domain Settings:**
1. `backup.coderkeyan.com` (Primary Vercel alias).
2. `coderkeyan.com` (Added to the project to allow the Worker to spoof the Host header).



## 🧠 3. The Traffic Cop: Cloudflare Worker

The Worker manages all incoming traffic to `coderkeyan.com`. It determines server health and routes requests accordingly.

### **Worker Logic Flow**

1. **Intercept:** Catches all requests to `coderkeyan.com/*`.
2. **Loop Prevention:** Ignores requests already heading to `pi.` or `backup.` subdomains.
3. **Primary Attempt:** Fetches from the Pi with a 5-second timeout.
4. **Failover:** If the Pi fails or times out, it fetches from Vercel, rewriting the `Host` header to ensure Vercel serves the correct project.

### **Worker Script**

```javascript
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const PRIMARY_PI = "https://pi.coderkeyan.com";
    const BACKUP_VERCEL = "https://backup.coderkeyan.com";

    // 🛑 Loop Breaker
    if (url.hostname.includes("pi.") || url.hostname.includes("backup.")) {
      return fetch(request);
    }

    try {
      // 1. Try to fetch from Raspberry Pi
      const piRequest = new Request(PRIMARY_PI + url.pathname + url.search, {
        method: request.method,
        headers: request.headers,
        redirect: "follow"
      });

      const response = await fetch(piRequest, { 
        signal: AbortSignal.timeout(5000) 
      });

      if (response.ok || (response.status >= 200 && response.status < 500)) {
        return response;
      }
      throw new Error("Pi unreachable");

    } catch (e) {
      // 2. Fallback to Vercel
      const vercelRequest = new Request(BACKUP_VERCEL + url.pathname + url.search, {
        method: request.method,
        headers: request.headers,
        redirect: "follow"
      });
      
      vercelRequest.headers.set("Host", "coderkeyan.com");
      return fetch(vercelRequest);
    }
  }
};

```

## 🔒 4. Critical Cloudflare Settings

To ensure the Worker can communicate with both origins:

* **SSL/TLS Mode:** Must be set to **Full (Strict)**. 💎
* **DNS Proxy:** Both `pi` and `backup` CNAME records must have the **Orange Cloud (Proxied)** enabled. 🟠
* **Worker Route:** The Worker must be assigned as a **Custom Domain** for `coderkeyan.com`.

---

**Would you like me to help you set up an automated GitHub Action to keep both your Pi and Vercel in sync whenever you push code?** 🤖✨
