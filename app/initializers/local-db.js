export function initialize(application) {
  application.inject('route', 'db', 'service:database-fish');
}

export default {
  name: 'local-db',
  initialize
};
