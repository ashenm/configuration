function FindProxyForURL (url, host) {

  const domains = [
    'sonarqube.singlife.com',
    'teamcity.singlife.com',
  ];

  if (domains.some(dnsDomainIs.bind(null, host))) {
    return 'SOCKS5 127.0.0.1:5050';
  }

  return 'DIRECT';

}

/* vim: set expandtab shiftwidth=2 syntax=javascript: */
