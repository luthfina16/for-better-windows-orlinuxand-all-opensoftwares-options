const puppeteer = require('puppeteer');
var moment = require('moment-timezone');


// (async () => {
//     const browser = await puppeteer.launch({
//         executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
//         userDataDir: '%LOCALAPPDATA%\Google\Chrome\User Data',
//         headless: false
//     });
//     const page = await browser.newPage();
//     await page.goto('https://shopee.co.id/Apple-iPhone-SE-2nd-Gen-128GB-Black-i.241308147.7953405952');
//     await page.screenshot({ path: 'example.png' });
//    // await new Promise(resolve => setTimeout(resolve, 1500000))
//     await browser.close();
// })();
const main = async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        userDataDir: './user_data',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
          //  '--disable-accelerated-2d-canvas',
            //'--no-first-run',
          //  '--no-zygote',
          //  '--single-process', // <- this one doesn't works in Windows
            '--disable-gpu'
          ],
        headless: false
    });
    const page = await browser.newPage();
    const waitForLoad = new Promise(resolve => page.on('load', () => resolve()));
    while (true) {
        let url = "https://shopee.co.id/Emas-UBS-0.5-Gram-Logam-Mulia-Garansi-Uang-Kembali-Include-Sertifikat-i.13385605.440060031";
        let tes = "https://shopee.co.id/BAREL-RJ45-DOUBLE-CABANG-(BARREL-UTP-DOUBLE)-i.4622483.46014082";
        var time = moment().tz("Asia/Jakarta").format('h:mm:ss');
        await page.goto(url);
        //await page.setCacheEnabled(false);

        //Menunggu semua yang ada
        waitForLoad;
        // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        //mengecek yang perlu
        await page.waitForSelector('button.btn.btn-tinted.btn--l.btn-tinted--disabled.YtgjXY._3a6p6c', { timeout: 1000 }).catch(() => console.log(`time: ${time}. tombol tidak ada!!`));
        await page.waitForSelector('button.btn.btn-tinted.btn--l.YtgjXY._3a6p6c', { timeout: 5000 }).catch(() => console.log(`time: ${time}. tombol 2 tidak ada!!`));
        const is_disabled = await page.evaluate(() => document.querySelector('button.btn.btn-tinted.btn--l.btn-tinted--disabled.YtgjXY._3a6p6c') !== null);
        const autoClick = await page.evaluate(() => document.querySelector('button.btn.btn-tinted.btn--l.YtgjXY._3a6p6c').click()).catch(() => console.log(`time: ${time}. tombol 2 tidak ada!!`));
        const delay = await new Promise(resolve => setTimeout(resolve, 100));



        // page.on('response', response => {
        //     console.log(time + '.' + response.status())
        //     if (response.url().endsWith("api/v2/cart/add_to_cart")) {
        //         console.log(`time: ${time}. add to cart response code:  ${response}`);
        //     }})
            // do something here

            if (is_disabled) {
                console.log(`time: ${time}.  masih disable-_`)

            }
            else {
                console.log(`time: ${time}. sudah unlock gasss`)
                
                    delay;
                    autoClick;
                
            }
        
        //await new Promise(resolve => setTimeout(resolve, 00))
        //await browser.close();
        await new Promise(resolve => setTimeout(resolve, 100));

    }
    // await page.evaluate(() => {

    //     console.log(document.querySelector('div.xns9gb').values());
    // })
    // Type "JavaScript" into the search bar

    //   // Click on the "Google Search" button and wait for the page to load
    //   const waitForLoad = new Promise(resolve => page.on('load', () => resolve()));
    //   await page.evaluate(() => {
    //     document.querySelector('input[value="Google Search"]').click();
    //   });
    //   await waitForLoad;

    //   // Get all the search result URLs
    //   const links = await page.evaluate(function getUrls() {
    //     return Array.from(document.querySelectorAll('a cite').values()).
    //       map(el => el.innerHTML);
    //   });
    //   console.log(links);



}
main().catch(console.error)