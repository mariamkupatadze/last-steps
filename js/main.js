let activeTab = 0;
$(".tabText").eq(activeTab).addClass("activeText")
$(".icon-i").eq(activeTab).addClass("active")
$(".icon-p").eq(activeTab).addClass("active")

$(".prevBtn").hide()


$(".nextBtn").click(function(){
    activeTab++;

    // button ღილაკების ჩვენება
    if (activeTab == 2) {
        $(".nextBtn").text("finish")
    }
    if (activeTab > 0) {
        $(".prevBtn").show()
    }


     //icon-ის ფერის შეცვლა
    $(".icon-i.active").removeClass("active")
    $(".icon-i").eq(activeTab).addClass("active")

    $(".icon-p.active").removeClass("active")
    $(".icon-p").eq(activeTab).addClass("active")


    // წარწერის გადასვლა(გამოჩენა)
    if($(".tabText.activeText").next().length == 1) {
        $(".tabText.activeText").removeClass("activeText").next().addClass("activeText")
    } else {
        $(".tabText.activeText").removeClass("activeText")
        $(".tabText").eq(0).addClass("activeText")
    }

})

$(".prevBtn").click(function(){
    activeTab--;

    // button ღილაკების ჩვენება
    if ( activeTab == 0) {
        $(".prevBtn").hide()
        $(".nextBtn").text("Next")
     }


    //icon-ის ფერის შეცვლა
    $(".icon-i.active").removeClass("active")
    $(".icon-i").eq(activeTab).addClass("active")

    $(".icon-p.active").removeClass("active")
    $(".icon-p").eq(activeTab).addClass("active")

    // წარწერის გადასვლა(გამოჩენა)
    if($(".tabText.activeText").prev().length == 1) {
        $(".tabText.activeText").removeClass("activeText").prev().addClass("activeText")
    } else {
        $(".tabText.activeText").removeClass("activeText")
        $(".tabText").last().addClass("activeText")
    }
})