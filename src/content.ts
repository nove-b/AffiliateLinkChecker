window.onload = function() {
    const regex = /^(https:\/\/px\.a8\.net|https:\/\/t\.afi\-b\.com|https:\/\/i\.moshimo\.com|https:\/\/af\.moshimo\.com\/af\/|https:\/\/h\.accesstrade\.net|https:\/\/ck\.jp\.ap\.valuecommerce\.com|https:\/\/click\.j-a-net\.jp|https:\/\/smart-c\.jp|https:\/\/mttag\.com|https:\/\/get\.mobu\.jp|https:\/\/www\.infotop\.jp|https:\/\/affiliate\.docomo\.ne\.jp|https:\/\/hb\.afl\.rakuten\.co\.jp\/|https:\/\/amzn\.to|https:\/\/www\.amazon\.co\.jp.*-22)/;
        const aTags = document.querySelectorAll('a');
        const affiliateLinks = Array.from(aTags).filter(aTags => {
            return regex.test(aTags.href);
        });
        affiliateLinks.forEach(el => {
            el.style.outline = "2px solid red";
            el.style.outlineOffset = "4px";
        });
    }