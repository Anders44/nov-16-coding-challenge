# November 16 Coding Challenge (Due 18 November 12:59 pm Eastern)

## Tier I (90 points)

The `accountEditForm` LWC in this project has... some problems. It should be a component that uses a record edit form (displayed on the Account record page) and displays a toast when a user saves their changes to the record. Fix it so that it's able to accomplish that goal.

## Tier II (10 points)

Modify the `handleSuccess` method in the `accountEditForm.js` file. This method should set the `read-only` attribute of all `lightning-input` components in `accountEditForm.html` to `true` to make the fields read-only whenever the record is saved.

The method should also change a Boolean property such that a `lightning-button` labeled `Edit` should be rendered where it wasn't before. The `onclick` attribute of this second button should be action bound to a JavaScript method that changes the `read-only` attribute of all `lightning-input` components in `accountEditForm.html` to `false`.
