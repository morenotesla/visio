

function lecture(item,eleve) {
phrase=localStorage.getItem(eleve)
pos=phrase.indexOf('='+item)

if (pos==-1) {

return 0 }

else

{

posfin=phrase.indexOf('=',pos+1)

if (posfin==-1) {
valeur=phrase.substring(pos+item.length+1)	
}
else {
valeur=phrase.substring(pos+item.length+1,posfin)

}

if (/^[0-9]+$/.test(valeur)) {
return (parseInt(valeur))	
}

else
	
	{
		
return valeur			
	}


}	
	
	
}


function ecriture(item,eleve,valeur) {
	
phrase=localStorage.getItem(eleve)
pos=phrase.indexOf('='+item)

if (pos==-1) {

localStorage.setItem(eleve, phrase+'='+item+valeur) }

else

{

premierbout=phrase.substring(0,pos+item.length+1)
posfin=phrase.indexOf('=',pos+1)
dernierbout=phrase.substring(posfin)
localStorage.setItem(eleve, premierbout+valeur+dernierbout)		
	
	
	
}

}


function ajout(item,eleve,valeur) {
	
	
ecriture(item,eleve,valeur+lecture(item,eleve))	
	
}