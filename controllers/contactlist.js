let BusinessContacts = require("../models/contacts");

exports.contactList = function (req, res, next) {
  BusinessContacts.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("secure/contactlist", {
        title: "Contact List",
        ContactList: contactList,
      });
    }
  }).sort({ contactName: "ascending" });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  BusinessContacts.findById(id, (err, itemToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("secure/edit", {
        title: "Edit Item",
        item: itemToEdit,
        userName: req.user ? req.user.username : "",
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;
  let updatedItem = BusinessContacts({
    _id: id,
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    contactEmail: req.body.contactEmail,
  });
  console.log(">>>");
  console.log(id);
  console.log(updatedItem);
  console.log(">>>");
  BusinessContacts.updateOne({ _id: id }, updatedItem, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/secure/contactlist");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  BusinessContacts.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/secure/contactlist");
    }
  });
};
