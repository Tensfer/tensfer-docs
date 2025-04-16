---
sidebar_position: 3
---

# Going live with Tensfer

Once your integration is tested, you can switch to production and test some more with a 100 free API calls. Our engineers and sales team are ready to support you in launching your app.

### Final steps
When you have tested your App in the sandbox environment and want to go live with your product, get in touch with the <a href='/' className='link'>Tensfer sales team.</a>

The Sales team makes sure that you finished your onboarding and that your business needs are satisfied. The team then connects you with a Tensfer engineer who verifies that your integration is running optimally. Tensfer recommends that you take a look at the integration best practices before you switch to production.

Once your integration is verified, you need to:

- Switch API keys from sandbox to production in your app.
- Switch the callback URL from sandbox to production.
- Define a production URL for your webhooks. Visit the <a href='/' className='link'>Webhooks guide</a> for more details.
- Set the base URL of your application's requests to the production environment.
- Tensfer recommends that you only launch your product to a subset of your users. This can help you fine-tune the Payments operation before scaling up to a larger user base.


### Best practices

This section describes some of the key concepts and best practices that you can adopt for a smooth integration experience.

<details className='details'>
  <summary className='bold'>Understand how authentication works.</summary>
  <div>
    <div>Tensfer's API uses bearer authentication. There are 3 kinds of keys you must use in your implementation: the client token, the public API key, and the secret API key.</div>

    ___

   <div>Visit the <a href='' className='link'>API overview</a> understand more about your different API keys, and how you can retrieve them from the dashboard.</div>
  </div>
</details>

<details className='details'>
  <summary className='bold'>Use webhooks.</summary>
  <div>
    <div>Webhooks provide real-time notifications when important events take place in your Tensfer integration. You can subscribe to these notifications by setting up a webhook URL in your Tensfer app. You will receive notifications to your system via simple HTTP requests from Tensfer, using `JSON` payloads..</div>

    ___

   <div>Make sure that you understand these key points about using webhooks:</div>
   <div>
        - <a href='/' className='link'>How to subscribe to webhooks</a>
        - <a href='/' className='link'>The different webhook notification levels that you can utilize</a>
        - <a href='/' className='link'>How to respond to webhooks</a>
        - <a href='/' className='link'>How to verify that a webhook was sent by Tensfer</a>
   </div>
  </div>
</details>

<details className='details'>
  <summary className='bold'>Use callbacks.</summary>
  <div>
    <div>Callbacks provide actionable information when specific events take place in your Tensfer app. Improve your application's usability and enhance user experience by building workflows, front-end responses, and automation around the callbacks that Tensfer offers.</div>

    ___

   <div>Make sure that you understand the <a href='/' className='link'>different types of callbacks</a>, and the recommended actions you can take when a callback event occurrs.</div>
  </div>
</details>

<details className='details'>
  <summary className='bold'>Understand the difference between webhooks and callbacks.</summary>
  <div>
    <div>**Webhooks** notify you about updates in the Tensfer products that you enable in your app. Some examples when Tensfer sends webhook notifications:</div>

    ___

   <div>
        - a user needs reauthentication
        - an identity profile is ready
        - a user cancels a payment
   </div>

    ___
    
<div>Use these notifications for tasks that require a response via the API, such as asynchronous requests, retries, or any other operation that needs processing on the backend of your application.</div>

___

<div>**Callback events** give you detailed information about what the user does in your Tensfer integration. For example, you can get callbacks when:</div>

___

   <div>
        - specific screens load in the Tensfer app
        - a user has successfully connected their accounts
        - an error occurred during app initialization
   </div>

   ___

   <div>Use these callbacks to build front-end logic in your app, like displaying success or error messages or advancing your users in the app workflow.</div>
  </div>
</details>

<details className='details'>
  <summary className='bold'>Handle API responses appropriately.</summary>
  <div>
    <div>Make sure that your integration handles:</div>

    ___

   <div>
        - Paginated responses.
        - `null` values
        - `204 - No content` responses. Some API endpoints return this status code, with no content in the body of the response.
        - `400`, `401`, `500`, and timeout errors. Tensfer recommends that you log the `request_id` of error responses in case you need to reach out to the Support team. This ID can help speed up the troubleshooting process.
   </div>

   ___

   <div>Read more about how the handle responses from the Tensfer API in the <a href='/' className='link'>API reference.</a></div>
  </div>
</details>

<details className='details'>
  <summary className='bold'>Be prepared for non-breaking changes.</summary>
  <div>
    <div>The Tensfer team is continuously working to improve the API. This means that changes in the API may happen. Make sure that any potential non-breaking changes in Tensfer's API will not affect your integration. Some examples:</div>

    ___

   <div>
        - New fields or a different field order in the response body
        - Change in the number of characters in a string
        - Adding new endpoints
   </div>
  </div>
</details>
