const today = new Date();

const todayDate = () => {
    const year = today.getFullYear();
    const Month =today.getMonth();
    const Date =today.getDate();

    console.log(year+'年'+(Month+1)+'月'+Date+'日')
}

todayDate();

