export function initialize(appInstance) {
  let loggerService = appInstance.lookup('service:logger');
  return loggerService.get('enabled');
}

export default {
  initialize
};
