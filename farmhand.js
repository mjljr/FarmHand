var fhOpt;
chromeSettings();

async function chromeSettings() {
    var css = new Promise(function(resolve, reject){
        chrome.storage.sync.get(null, function(items) {
            resolve(items);
        })
    });

    fhOpt = await css;
    return fhOpt;
}

function menuBuildCheck(menuType = '') {
    // Filter for options keys that don't have false values
    var optKeys = Object.keys(fhOpt);
    var filteredOpt = optKeys.filter(function(x) {
        return fhOpt[x];
    });

    // Remove fqlFarmId key if it exists as it has no relevance to this check
    const index = filteredOpt.indexOf("fqlFarmId");
    if (index > -1) {
        filteredOpt.splice(index, 1);
    }

    // Return true/false based on keys matching menu type string
    const optStatus = filteredOpt.some(r=>r.includes(menuType));
    return optStatus;
}

function buildFarmLinks(imgArrow) {
    let fqlBuild = '';
    if(!(menuBuildCheck('fql'))) {
        // No need to build the menu
        return fqlBuild;
    }

    // Menu HTML
    const menuFqlTop = '<details><summary>Farm Quick Links<span class="icon"><img src="'+imgArrow+'"width="22" height="22"></span><span class="spacer"></span></summary></div>';
    const menuFqlBottom = '</details><hr class="fh-menu">';
    const fqlFarm =
    '<li>\
    <a href="xfarm.php?id='+fhOpt.fqlFarmId+'" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">My Farm</div></div></div></a>\
    </li>';
    const fqlRaptor =
    '<li>\
    <a href="pen.php?id='+fhOpt.fqlFarmId+'" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Raptor Pen</div></div></div></a>\
    </li>';
    const fqlExplore =
    '<li>\
    <a href="explore.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Explore</div></div></div></a>\
    </li>';
    const fqlFishing =
    '<li>\
    <a href="fish.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Fishing</div></div></div></a>\
    </li>';
    const fqlQuests =
    '<li>\
    <a href="quests.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Help Needed</div></div></div></a>\
    </li>';
    const fqlWorkshop =
    '<li>\
    <a href="workshop.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Workshop</div></div></div></a>\
    </li>';
    const fqlCraftworks = 
    '<li>\
    <a href="craftworks.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Craftworks</div></div></div></a>\
    </li>';

    // Build Farm quick links menu
    fqlBuild += menuFqlTop;
    if(fhOpt.fqlFarm) { fqlBuild += fqlFarm; }
    if(fhOpt.fqlRaptor) { fqlBuild += fqlRaptor; }
    if(fhOpt.fqlExplore) { fqlBuild += fqlExplore; }
    if(fhOpt.fqlFishing) { fqlBuild += fqlFishing; }
    if(fhOpt.fqlQuests) { fqlBuild += fqlQuests; }
    if(fhOpt.fqlWorkshop) { fqlBuild += fqlWorkshop; }
    if(fhOpt.fqlCraftworks) { fqlBuild +=fqlCraftworks }
    fqlBuild += menuFqlBottom;

    return fqlBuild;
}

function buildTownLinks(imgArrow) {
    let tqlBuild = '';
    if(!(menuBuildCheck('tql'))) {
        // No need to build the menu
        return tqlBuild;
    }

    // Menu HTML
    const menuTqlTop = '<details><summary>Town Quick Links<span class="icon"><img src="'+imgArrow+'"width="22" height="22"></span><span class="spacer"></span></summary></div>';
    const menuTqlBottom = '</details><hr class="fh-menu">';
    const tqlBank =
    '<li>\
    <a href="bank.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Bank</div></div></div></a>\
    </li>';
    const tqlStore =
    '<li>\
    <a href="store.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Country Store</div></div></div></a>\
    </li>';
    const tqlMarket =
    '<li>\
    <a href="market.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Farmer\'s Market</div></div></div></a>\    </li>';
    const tqlPetShop =
    '<li>\
    <a href="pets.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Pet Shop</div></div></div></a>\
    </li>';
    const tqlPetItemCollect =
    '<li>\
    <a href="allpetitems.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Pet Item Collection</div></div></div></a>\
    </li>';
    const tqlPostOffice =
    '<li>\
    <a href="postoffice.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Post Office</div></div></div></a>\
    </li>';
    const tqlSteakMarket =
    '<li>\
    <a href="steakmarket.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Steak Market</div></div></div></a>\
    </li>';
    const tqlWell =
    '<li>\
    <a href="well.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Wishing Well</div></div></div></a>\
    </li>';
    const tqlCommunity =
    '<li>\
    <a href="comm.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Community Center</div></div></div></a>\
    </li>';
    
    // Build Town quick links menu
    tqlBuild += menuTqlTop;
    if(fhOpt.tqlBank) { tqlBuild += tqlBank; }
    if(fhOpt.tqlStore) { tqlBuild += tqlStore; }
    if(fhOpt.tqlMarket) { tqlBuild += tqlMarket; }
    if(fhOpt.tqlPetShop) { tqlBuild += tqlPetShop; }
    if(fhOpt.tqlPetItemCollect) { tqlBuild += tqlPetItemCollect; }
    if(fhOpt.tqlPostOffice) { tqlBuild += tqlPostOffice; }
    if(fhOpt.tqlSteakMarket) { tqlBuild += tqlSteakMarket; }
    if(fhOpt.tqlWell) { tqlBuild += tqlWell; }
    if(fhOpt.tqlCommunity) { tqlBuild += tqlCommunity; }
    tqlBuild += menuTqlBottom;

    return tqlBuild;
}

$(document).ready(function() {
    let imgArrow=chrome.runtime.getURL('img/arrow-up.svg');
    let menuFull = '';
    const menuTop =
    '<ul>\
    <li>\
    <div class="item-content"><div class="item-inner-ext"><fh-title1>Farm</fh-title1><fh-title2>Hand</fh-title2></div></div>\
    </li>\
    ';
    const menuBottom =
    '<div class="item-content"><div class="item-inner-ext"><button id="go-to-options">FarmHand Options</button></div></div>\
    </ul>\
    ';

    // Build FarmHand Menu
    menuFull += menuTop;
    menuFull += buildFarmLinks(imgArrow);
    menuFull += buildTownLinks(imgArrow);
    menuFull += menuBottom;

    $('.list-block').eq(2).append(menuFull);
    
    document.querySelector('#go-to-options').addEventListener('click', function() {
        if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
        } else {
        window.open(chrome.runtime.getURL('options.html'));
        }
    });

    if (fhOpt.chatNotif) {
        // Case insensitive :contains function
        // https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
        $.expr[":"].contains = $.expr.createPseudo(function(arg) {
            return function(elem) {
                return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
            };
        });
        const atUsername = '@' + fhOpt.chatUsername;
        var target = document.querySelector('div#chatzoneDesktop');
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                $('div.chat-txt:contains('+atUsername+')').css("background-color", fhOpt.chatColor);
            });
        });
        var config = {attributes: true, childList: true, characterData: true, subtree:true};
        observer.observe(target, config);
    }
});