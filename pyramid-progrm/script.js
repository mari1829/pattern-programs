let di=5;diam="";
for(i=1;i<di;i++){
	for(j=0;j<di-i;j++){
		diam+=" ";
	}
	for(k=0;k<2*i-1;k++){
		diam+="*";
	}
	diam+="\n";
}
console.log(diam);