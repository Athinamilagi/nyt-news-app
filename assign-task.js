// Import the Suprsend SDK
const { Suprsend, Event } = require("@suprsend/node-sdk");

// Create an instance of the Suprsend class
const suprsend = new Suprsend(
  "nz1ue991NIwZZTK5aceq",
  "SS.WSS.dLrtbNCdLg8fAJgupT1HQCtjoxclGTkmvlEx01vE",
  {
    base_url: "https://hub.suprsend.com/event/",
  }
);

// Create an instance of the Event class
const event = new Event({
  distinct_id: "id1",
  event_name: "NOTIFICATION STATUS",
  properties: {
    name: "vignesh",
    call: "value",
  },
  brand_id: "default",
  tenant_id: "default",
  idempotency_key: "aaaa-cccc-1111-2222",
});

suprsend.track
// Track the event
suprsend.track_event(event)
  .then(response => {
    console.log(response); // { status: 200, body: { message: 'Event tracked successfully.' } }
  })
  .catch(err => {
    console.error(err);
  });
