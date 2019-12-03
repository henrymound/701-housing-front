/*
    ursula alwang and marissa baker
    queries for the rooms collection made for cs 701
    Fall 2019

    Contains a function for each type of query that takes as parametera
*/
const functions = require('firebase-functions');
var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");
const collectionKey = "rooms"; //name of the collection
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://midd-housing-database.firebaseio.com"
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

function search_by_building (building_ID) {

    var query = firestore.collection("rooms").where("Building ID", "==", building_ID)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });

    return query;
}

function search_by_capacity (capacity) {

    var query = firestore.collection("rooms").where("capacity", "==", true)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });

    return query;
}
function search_by_cap_gt_4 (Cap) {

    var query = firestore.collection("rooms").where("Cap", ">", 4).orderBy("Cap", "asc")
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });

    return query;

}
