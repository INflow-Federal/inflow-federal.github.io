function isExternal(url) {
  return url.hostname && url.hostname !== location.hostname;
}

function isPdf(url) {
  return url.pathname && (url.pathname.endsWith('.pdf') || url.pathname.endsWith('.doc') || url.pathname.endsWith('.docx'));
}

function openInNewTab(link) {
  link.target = '_blank';
  link.rel = 'noopener';
}

function handleLinks() {
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var url = new URL(link.href);
    if (isExternal(url) || isPdf(url)) {
      openInNewTab(link);
    }
  }
}

handleLinks();
