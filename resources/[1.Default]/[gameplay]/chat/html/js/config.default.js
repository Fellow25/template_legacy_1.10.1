// DO NOT EDIT THIS FILE
// Copy it to `config.js` and edit it
window.CONFIG = {
  defaultTemplateId: 'default', //This is the default template for 2 args1
  defaultAltTemplateId: 'defaultAlt', //This one for 1 arg
  templates: { //You can add static templates here
    'default': '<div class="chat-message"><div class="chat-message-body"><strong>{0}:</strong> {1}</div></div>',
    'defaultAlt': '{0}',
    'print': '<pre>{0}</pre>',
    'example:important': '<h1>^2{0}</h1>'
  },
  fadeTimeout: 4000,
  suggestionLimit: 5,
  style: {
    background: 'transparent',
    width: '28vw',
    height: '25vh',
  }
};



  // style: {
    // background: 'rgba(255, 93, 0, 0.62)',
    // border: '1px solid #000000',
    // width: '38%',
    // height: '22%',
  // }
