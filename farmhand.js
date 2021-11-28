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

$(document).ready(function() {
    let imgArrow=chrome.runtime.getURL('img/arrow-up.svg');
    let menuFull = '';
    const menuTop =
    '<ul>\
    <li>\
    <div class="item-content"><div class="item-inner-ext"><fh-title1>Farm</fh-title1><fh-title2>Hand</fh-title2></div></div>\
    </li>\
    ';

    let menuFqlTop = '<details><summary>Farm Quick Links<span class="icon"><img src="'+imgArrow+'"width="22" height="22"></span><span class="spacer"></span></summary></div>';
    const menuFqlBottom = '</details><hr class="fh-menu">';

    const fqlFarm =
    '<li>\
    <a href="xfarm.php?id='+fhOpt.fqlFarmId+'" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">My Farm</div></div></div></a>\
    </li>';
    const fqlExplore =
    '<li>\
    <a href="explore.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Explore</div></div></div></a>\
    </li>';
    const fqlFishing =
    '<li>\
    <a href="fish.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Fishing</div></div></div></a>\
    </li>';
    const fqlWorkshop =
    '<li>\
    <a href="workshop.php" data-view=".view-main" class="item-link close-panel"><div class="item-content"><div class="item-inner"><div class="item-title">Workshop</div></div></div></a>\
    </li>';

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

    const menuBottom =
    '<div class="item-content"><div class="item-inner-ext"><button id="go-to-options">FarmHand Options</button></div></div>\
    </ul>\
    ';

    // Build FarmHand Menu
    menuFull += menuTop;
    menuFull += menuFqlTop;
    if(fhOpt.fqlFarm) { menuFull += fqlFarm; }
    if(fhOpt.fqlExplore) { menuFull += fqlExplore; }
    if(fhOpt.fqlFishing) { menuFull += fqlFishing; }
    if(fhOpt.fqlWorkshop) { menuFull += fqlWorkshop; }
    menuFull += menuFqlBottom;
    menuFull += menuTqlTop;
    if(fhOpt.tqlBank) { menuFull += tqlBank; }
    if(fhOpt.tqlStore) { menuFull += tqlStore; }
    if(fhOpt.tqlMarket) { menuFull += tqlMarket; }
    if(fhOpt.tqlPetShop) { menuFull += tqlPetShop; }
    if(fhOpt.tqlPetItemCollect) { menuFull += tqlPetItemCollect; }
    if(fhOpt.tqlPostOffice) { menuFull += tqlPostOffice; }
    if(fhOpt.tqlSteakMarket) { menuFull += tqlSteakMarket; }
    if(fhOpt.tqlWell) { menuFull += tqlWell; }
    menuFull += menuTqlBottom;
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