

const qtys = document.querySelectorAll('.qty');
const minuses = document.querySelectorAll('.minus');
const pluses = document.querySelectorAll('.plus');
const singleprodprices = document.querySelectorAll('.singleprodprice');
const dels = document.querySelectorAll('.del');

for(let i=0;i<minuses.length;i++)
{
    minuses[i].addEventListener('click', () => {
        console.log('minuses length'+minuses.length+' '+ (i+1)+'card');
        var val=parseInt(qtys[i].value);
        var price=parseInt(singleprodprices[i].innerHTML);
        if(val==2)
        {
            minuses[i].innerHTML=	'<i class="fa fa-trash-o" aria-hidden="true"></i>';
        }
        else
        {
            minuses[i].innerHTML=	'-';
        }
        if(val==1)
        {
            var price=parseInt(singleprodprices[i].innerHTML);
            singleprodprices[i].innerHTML=0;
            var subtotal=parseInt(document.getElementById('subtotal').innerHTML)-price;
            document.getElementById('subtotal').innerHTML=subtotal;
            var taxes=parseInt(document.getElementById('taxes').innerHTML);
            var total=subtotal+taxes;//-((document.getElementById('couponprice').innerHTML)!="")?100:0;
            if((document.getElementById('couponprice').innerHTML)!="")
            {
                total-=parseInt(document.getElementById('couponprice').innerText);
            }
            document.getElementById('total').innerHTML=total;
            dels[i].parentNode.parentNode.parentNode.removeChild(dels[i].parentNode.parentNode);
            
        }
        if(val>1)
        {
            singleprodprices[i].innerHTML = (val-1)*(price/val);
        }
        var sum=0;
        for(let i=0;i<singleprodprices.length;i++)
        {
            sum+=parseInt(singleprodprices[i].innerHTML);
        }
        document.getElementById('subtotal').innerHTML=sum;
        var subtotal=parseInt(document.getElementById('subtotal').innerHTML);

        var taxes=parseInt(document.getElementById('taxes').innerHTML);
        // var total=subtotal+taxes;
       
        var total=subtotal+taxes;//-((document.getElementById('couponprice').innerHTML)!="")?100:0;
        if((document.getElementById('couponprice').innerHTML)!="")
        {
            total-=parseInt(document.getElementById('couponprice').innerText);
        }
        document.getElementById('total').innerHTML=total;
    });
}
for(let i=0;i<pluses.length;i++) 
{
    pluses[i].addEventListener('click', () => {
        console.log('plusses length'+pluses.length+' '+(i+1)+'card');
        var val=parseInt(qtys[i].value);
        var price=parseInt(singleprodprices[i].innerHTML);
        // if(val>1)
        // price = price/(val);
        singleprodprices[i].innerHTML = (val+1)*(price/val);
        minuses[i].innerHTML=	'-';
        var sum=0;
        for(let i=0;i<singleprodprices.length;i++)
        {
            sum+=parseInt(singleprodprices[i].innerHTML);
        }
        document.getElementById('subtotal').innerHTML=sum;
        var subtotal=parseInt(document.getElementById('subtotal').innerHTML);

        var taxes=parseInt(document.getElementById('taxes').innerHTML);
        var total=subtotal+taxes;//-((document.getElementById('couponprice').innerHTML)!="")?100:0;
        if((document.getElementById('couponprice').innerHTML)!="")
        {
            total-=parseInt(document.getElementById('couponprice').innerText);
        }
        document.getElementById('total').innerHTML=total;
    });
}

window.onload=function(){
    var sum=0;
    for(let i=0;i<singleprodprices.length;i++)
    {
        sum+=parseInt(singleprodprices[i].innerHTML);
    }
    document.getElementById('subtotal').innerHTML=sum;
    var subtotal=parseInt(document.getElementById('subtotal').innerHTML);

    var taxes=parseInt(document.getElementById('taxes').innerHTML);
    var total=subtotal+taxes;//-((document.getElementById('couponprice').innerHTML)!="")?100:0;
    if((document.getElementById('couponprice').innerHTML)!="")
    {
        total-=parseInt(document.getElementById('couponprice').innerText);
    }
    document.getElementById('total').innerHTML=total;
}
for(let i=0;i<dels.length;i++)
{
    dels[i].addEventListener('click', () => {
        var price=parseInt(singleprodprices[i].innerHTML);
        singleprodprices[i].innerHTML=0;
        var subtotal=parseInt(document.getElementById('subtotal').innerHTML)-price;
        document.getElementById('subtotal').innerHTML=subtotal;
        var taxes=parseInt(document.getElementById('taxes').innerHTML);
        var total=subtotal+taxes;//-((document.getElementById('couponprice').innerHTML)!="")?100:0;
        if((document.getElementById('couponprice').innerHTML)!="")
        {
            total-=parseInt(document.getElementById('couponprice').innerText);
        }
        document.getElementById('total').innerHTML=total;
        dels[i].parentNode.parentNode.parentNode.removeChild(dels[i].parentNode.parentNode); return false;
    });
}

