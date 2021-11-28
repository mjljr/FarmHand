// Saves options to chrome.storage
function save_options() {
    var chatUsername = document.getElementById('chatUsername').value;
    var chatColor = document.getElementById('chatColor').value;
    var chatNotif = document.getElementById('chatNotif').checked;

    var fqlFarmId = document.getElementById('fqlFarmId').value;
    var fqlFarm = document.getElementById('fqlFarm').checked;
    var fqlExplore = document.getElementById('fqlExplore').checked;
    var fqlFishing = document.getElementById('fqlFishing').checked;
    var fqlWorkshop = document.getElementById('fqlWorkshop').checked;

    var tqlStore = document.getElementById('tqlStore').checked;
    var tqlMarket = document.getElementById('tqlMarket').checked;
    var tqlPetShop = document.getElementById('tqlPetShop').checked;
    var tqlPetItemCollect = document.getElementById('tqlPetItemCollect').checked;
    var tqlPostOffice = document.getElementById('tqlPostOffice').checked;
    var tqlSteakMarket = document.getElementById('tqlSteakMarket').checked;
    var tqlWell = document.getElementById('tqlWell').checked;
    chrome.storage.sync.set({
        // Chat settings
        chatUsername: chatUsername,
        chatColor: chatColor,
        chatNotif: chatNotif,
        // Farm quick links settings
        fqlFarmId: fqlFarmId,
        fqlFarm: fqlFarm,
        fqlExplore: fqlExplore,
        fqlFishing: fqlFishing,
        fqlWorkshop: fqlWorkshop,
        // Town quick links settings
        tqlBank: tqlBank,
        tqlStore: tqlStore,
        tqlMarket: tqlMarket,
        tqlPetShop: tqlPetShop,
        tqlPetItemCollect: tqlPetItemCollect,
        tqlPostOffice: tqlPostOffice,
        tqlSteakMarket: tqlSteakMarket,
        tqlWell: tqlWell
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
        status.textContent = '';
        }, 750);
    });
  }
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Default values
    chrome.storage.sync.get({
        chatUsername: 'null',
        chatColor: '#333',
        chatNotif: false,
        fqlFarmId: '0',
        fqlFarm: false,
        fqlExplore: true,
        fqlFishing: true,
        fqlWorkshop: true,
        tqlBank: true,
        tqlStore: true,
        tqlMarket: true,
        tqlPetShop: true,
        tqlPetItemCollect: false,
        tqlPostOffice: true,
        tqlSteakMarket: true,
        tqlWell: true
    }, function(items) {
        document.getElementById('chatUsername').value = items.chatUsername;
        document.getElementById('chatColor').value = items.chatColor;
        document.getElementById('chatNotif').checked = items.chatNotif;
        document.getElementById('fqlFarmId').value = items.fqlFarmId;
        document.getElementById('fqlFarm').checked = items.fqlFarm;
        document.getElementById('fqlExplore').checked = items.fqlExplore;
        document.getElementById('fqlFishing').checked = items.fqlFishing;
        document.getElementById('fqlWorkshop').checked = items.fqlWorkshop;
        document.getElementById('tqlBank').checked = items.tqlBank;
        document.getElementById('tqlStore').checked = items.tqlStore;
        document.getElementById('tqlMarket').checked = items.tqlMarket;
        document.getElementById('tqlPetShop').checked = items.tqlPetShop;
        document.getElementById('tqlPetItemCollect').checked = items.tqlPetItemCollect;
        document.getElementById('tqlPostOffice').checked = items.tqlPostOffice;
        document.getElementById('tqlSteakMarket').checked = items.tqlSteakMarket;
        document.getElementById('tqlWell').checked = items.tqlWell;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);