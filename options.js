// Saves options to chrome.storage
function save_options() {
    var chatUsername = document.getElementById('chatUsername').value;
    var chatColor = document.getElementById('chatColor').value;
    var chatNotif = document.getElementById('chatNotif').checked;

    var fqlFarmId = document.getElementById('fqlFarmId').value;
    var fqlFarm = document.getElementById('fqlFarm').checked;
    var fqlWorkshop = document.getElementById('fqlWorkshop').checked;
    var fqlFishing = document.getElementById('fqlFishing').checked;
    var fqlExplore = document.getElementById('fqlExplore').checked;
    var fqlQuests = document.getElementById('fqlQuests').checked;
    var fqlCraftworks = document.getElementById('fqlCraftworks').checked;
    var fqlRaptor = document.getElementById('fqlRaptor').checked;

    var tqlStore = document.getElementById('tqlStore').checked;
    var tqlMarket = document.getElementById('tqlMarket').checked;
    var tqlBorgen = document.getElementById('tqlBorgen').checked;
    var tqlBank = document.getElementById('tqlBank').checked;
    var tqlVault = document.getElementById('tqlVault').checked;
    var tqlSteakMarket = document.getElementById('tqlSteakMarket').checked;
    var tqlPostOffice = document.getElementById('tqlPostOffice').checked;
    var tqlPetShop = document.getElementById('tqlPetShop').checked;
    var tqlPetItemCollect = document.getElementById('tqlPetItemCollect').checked;
    var tqlWell = document.getElementById('tqlWell').checked;
    var tqlExchange = document.getElementById('tqlExchange').checked;
    var tqlLocksmith = document.getElementById('tqlLocksmith').checked;
    var tqlCommunity = document.getElementById('tqlCommunity').checked;
    chrome.storage.sync.set({
        // Chat settings
        chatUsername: chatUsername,
        chatColor: chatColor,
        chatNotif: chatNotif,
        // Farm quick links settings
        fqlFarmId: fqlFarmId,
        fqlFarm: fqlFarm,
        fqlWorkshop: fqlWorkshop,
        fqlFishing: fqlFishing,
        fqlExplore: fqlExplore,
        fqlQuests: fqlQuests,
        fqlCraftworks: fqlCraftworks,
        fqlRaptor: fqlRaptor,
        // Town quick links settings
        tqlStore: tqlStore,
        tqlMarket: tqlMarket,
        tqlBorgen: tqlBorgen,
        tqlBank: tqlBank,
        tqlVault: tqlVault,
        tqlSteakMarket: tqlSteakMarket,
        tqlPostOffice: tqlPostOffice,
        tqlPetShop: tqlPetShop,
        tqlPetItemCollect: tqlPetItemCollect,
        tqlWell: tqlWell,
        tqlExchange: tqlExchange,
        tqlLocksmith: tqlLocksmith,
        tqlCommunity: tqlCommunity
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
        fqlWorkshop: true,
        fqlFishing: true,
        fqlExplore: true,
        fqlQuests: false,
        fqlCraftworks: false,
        fqlRaptor: false,
        tqlStore: true,
        tqlMarket: true,
        tqlBorgen: false,
        tqlBank: true,
        tqlVault: false,
        tqlSteakMarket: true,
        tqlPostOffice: true,
        tqlPetShop: true,
        tqlPetItemCollect: false,
        tqlWell: true,
        tqlExchange: false,
        tqlLocksmith: false,
        tqlCommunity: false
        
    }, function(items) {
        document.getElementById('chatUsername').value = items.chatUsername;
        document.getElementById('chatColor').value = items.chatColor;
        document.getElementById('chatNotif').checked = items.chatNotif;
        document.getElementById('fqlFarmId').value = items.fqlFarmId;
        document.getElementById('fqlFarm').checked = items.fqlFarm;
        document.getElementById('fqlWorkshop').checked = items.fqlWorkshop;
        document.getElementById('fqlFishing').checked = items.fqlFishing;
        document.getElementById('fqlExplore').checked = items.fqlExplore;
        document.getElementById('fqlQuests').checked = items.fqlQuests;
        document.getElementById('fqlCraftworks').checked = items.fqlCraftworks;
        document.getElementById('fqlRaptor').checked = items.fqlRaptor;

        
        document.getElementById('tqlStore').checked = items.tqlStore;
        document.getElementById('tqlMarket').checked = items.tqlMarket;
        document.getElementById('tqlBorgen').checked = items.tqlBorgen;
        document.getElementById('tqlBank').checked = items.tqlBank;
        document.getElementById('tqlVault').checked = items.tqlVault;
        document.getElementById('tqlSteakMarket').checked = items.tqlSteakMarket;
        document.getElementById('tqlPostOffice').checked = items.tqlPostOffice;
        document.getElementById('tqlPetShop').checked = items.tqlPetShop;
        document.getElementById('tqlPetItemCollect').checked = items.tqlPetItemCollect;
        document.getElementById('tqlExchange').checked = items.tqlExchange;
        document.getElementById('tqlWell').checked = items.tqlWell;
        document.getElementById('tqlLocksmith').checked = items.tqlLocksmith;
        document.getElementById('tqlCommunity').checked = items.tqlCommunity;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);