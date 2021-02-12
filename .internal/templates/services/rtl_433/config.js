const rtl_433 = () => {
  const retr = {};

  const serviceName = 'rtl_433';

  retr.getConfigOptions = () => {
    return {
      serviceName, // Required
      volumes: false,
      networks: false,
      logging: true
    }
  };

  retr.getHelp = () => {
    return {
      serviceName, // Required
      website: '', // Website of service
      rawMarkdownRemote: '', // Usually links to github raw help pages.
      rawMarkdownLocal: '', // Relative path to docs locally
      onlineRendered: '' // Usually links to the github page for this service.
    };
  };

  retr.getCommands = () => {
    return {
      commands: {} // Key/value pair of helper commands user can run locally
    };
  };

  retr.getMeta = () => {
    return {
      serviceName, // Required
      displayName: 'RTL 433 (untested)',
      serviceTypeTags: ['wui', 'database manager']
    };
  };

  return retr;
};

module.exports = rtl_433;
