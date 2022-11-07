chrome.runtime.onMessage.addListener((message) => {
  if (message.action == "fillForm") {
    fillForm();
  }
});

function fillForm() {
  const inputs = document.querySelectorAll("input");
  const selectBoxes = document.querySelectorAll("select");
  const textareas = document.querySelectorAll("textarea");

  const formatYmd = (date) => {
    return date.toISOString().slice(0, 10);
  };

  inputs.forEach((input) => {
    switch (input.type) {
      case "text":
        input.value = "Lorem ipsum dolor";
        break;
      case "number":
        input.value = 999;
        break;
      case "password":
        input.value = "test1234";
        break;
      case "radio":
        input.click();
        break;
      case "checkbox":
        input.click();
        break;
      case "tel":
        input.value = "0218846484";
        break;
      case "search":
        input.value = "Lorem ipsum dolor";
        break;
      case "url":
        input.value = "https://example.com";
        break;
      case "email":
        input.value = "anonymous@google.com";
        break;
      case "date":
        input.value = formatYmd(new Date());
        break;
    }
  });

  selectBoxes.forEach((selectBox) => {
    const collection = selectBox.children;
    const randomItem = Math.floor(Math.random() * selectBox.children.length);

    collection[randomItem].setAttribute("selected", "selected");
  });

  textareas.forEach((textarea) => {
    textarea.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil`;
  });
}
