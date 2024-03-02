---
sidebar_position: 4
---

# Embed your app

Gain more flexibility and control by configuring parameters according to your use case and business needs.

### How to embed your app

After you build your app, the App builder generates the assets you need to embed your app. These ready-to-use code snippets are unique for each app that you create. Use them to minimize the chance of error and to reduce your time to production. Here's how you can find these code snippets on the dashboard:

- Open the Apps page and select the app that you want to embed. This opens the app's Integration tab.

### Using buildWithShortUrl

This option provides a quick and simple way to directly integrate the Tensfer app you already customized into your app or website. `short_url` is a unique URL that identifies a Tensfer app that you created.

```js
Tensfer.buildWithShortUrl({
  short_url: "{Your short_url}",
  onSuccess: function (data) {
    console.log("success", data);
  },
  onClose: function () {
    console.log("closed");
  },
});
```
