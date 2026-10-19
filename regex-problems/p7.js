// Convert dates from DD-MM-YYYY into YYYY/MM/DD.

const regex=/^(\d{2})-(\d{2})-(\d{4})$/;

const convertDate=(date)=>{
    return date.replace(regex,"$3/$2/$1");
}
console.log(convertDate("19-10-2026"));

// convert "25/12/2025" into "2025-12-25"

const regex2=/^(\d{2})\/(\d{2})\/(\d{4})$/;

const convertDate2=(date)=>{
    return date.replace(regex2,"$3-$2-$1");
}

console.log(convertDate2("25/12/2025"))