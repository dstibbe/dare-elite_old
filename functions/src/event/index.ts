import * as functions from 'firebase-functions';
import {Land} from "../../../src/app/pages/landen/models/land.model";
import * as admin from 'firebase-admin';

function handleCountryDefined(details: Land) {
  console.log('Store land : ', details);
  return admin.firestore().collection("/landen")
    .add(details)
    .catch(problem =>
      console.log("Couldn't store problem: ", problem)
    )
}

function handleCountryUpdated(details: any) {
  console.log("Not handling countryUpdated event yet.");
  return Promise.resolve();
}

function handleUnknown(details: any) {

  console.log("Cannot handle unknown event");
  return Promise.resolve();
}

export const sparkle = functions.firestore
  .document("events/{eventid}")
  .onCreate((event, context) => {
      console.log('-');
      console.log('Humpty dumpty: ', event);
      console.log('-');
      console.log('Event id: ', context.params.eventid);
      console.log('-');
      console.log(event.data());
      console.log('-');
      const type = event.get('type');
      console.log('-');
      console.log(type);
      console.log('-');
      console.log('Event type : ', type);
      console.log('-');

      switch (type) {

        case 'countryDefined' :
          return handleCountryDefined(event.get('details'));
        case 'countryUpdated' :
          return handleCountryUpdated(event.get('details'));
        default:
          return handleUnknown(event);

      }

    }
  );
