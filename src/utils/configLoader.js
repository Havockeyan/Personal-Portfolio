import 'server-only';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// Cache for loaded configs
const configCache = {};

/**
 * Load and parse a YAML configuration file
 * @param {string} configName - Name of the config file (without .yml extension)
 * @returns {Object} Parsed configuration object
 */
export function loadConfig(configName) {
  // Return cached config if available
  if (configCache[configName]) {
    return configCache[configName];
  }

  try {
    const configPath = path.join(process.cwd(), 'config', `${configName}.yml`);
    const fileContents = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(fileContents);
    
    // Cache the config
    configCache[configName] = config;
    
    return config;
  } catch (error) {
    console.error(`Error loading config ${configName}:`, error);
    return {};
  }
}

/**
 * Load personal configuration
 */
export function getPersonalConfig() {
  return loadConfig('personal');
}

/**
 * Load timeline configuration
 */
export function getTimelineConfig() {
  return loadConfig('timeline');
}

/**
 * Load site configuration
 */
export function getSiteConfig() {
  return loadConfig('site');
}

/**
 * Load projects configuration
 */
export function getProjectsConfig() {
  return loadConfig('projects');
}

/**
 * Load blog configuration
 */
export function getBlogConfig() {
  return loadConfig('blog');
}

/**
 * Get all configurations
 */
export function getAllConfigs() {
  return {
    personal: getPersonalConfig(),
    timeline: getTimelineConfig(),
    site: getSiteConfig(),
    projects: getProjectsConfig(),
    blog: getBlogConfig()
  };
}
