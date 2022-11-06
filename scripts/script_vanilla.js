let portfolioImgs=document.querySelectorAll('[class*="portfolio-image-"]');
console.log(portfolioImgs);
for(var i=0;i<portfolioImgs.length;i++) {
    console.log(portfolioImgs[i]);
    i=i+1;
    let url='url(../images/portfolio-image-'+i+'.jpg)';
    i=i-1;
    console.log(portfolioImgs[i].style);
    portfolioImgs[i].style.backgroundImage=url;
    portfolioImgs[i].style.backgroundPosition='center center';
}