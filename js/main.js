$(function() {
        Morris.Donut({
        element: 'usabilità',
        colors: ["#802200", "#ff4500", "#e65722", "#e63022"],
        data: [{
            label: "En",
            value: 468
        }, {
            label: "Es",
            value: 90
        }, {
            label: "Fr",
            value: 49
        }, {
            label: "De",
            value: 23
        }, {
            label: "En-Gb",
            value: 8
        }, {
            label: "Ru",
            value: 8
        }],
        resize: true
    });

        Morris.Donut({
        element: 'accessibilità',
        data: [{
            label: "En",
            value: 468
        }, {
            label: "En-Gb",
            value: 13
        }, {
            label: "Fr",
            value: 9
        }],
        resize: true
    });
        });



      var word_list = [
        {text: "#Accessibility", weight: 100, html: {title: "705 occorrenze", "class": "accessibility"}},
        {text: "#AODAfail", weight: 70, html: {title: "324 occorrenze", "class": "accessibility"}},
        {text: "#Disability", weight: 37, html: {title: "37 occorrenze", "class": "accessibility"}},
        {text: "#AODA", weight: 44, html: {title: "44 occorrenze", "class": "accessibility"}},
        {text: "#AndroidDev", weight: 17, html: {title: "17 occorrenze", "class": "accessibility"}},
        {text: "#Chrome", weight: 17, html: {title: "17 occorrenze", "class": "accessibility"}},
        {text: "#Android", weight: 17, html: {title: "17 occorrenze", "class": "accessibility"}},
        {text: "#TDBSEAC", weight: 26, html: {title: "26 occorrenze", "class": "accessibility"}},
        {text: "#Ally", weight: 5, html: {title: "5 occorrenze", "class": "accessibility"}},
        {text: "#Mojocon", weight: 15, html: {title: "15 occorrenze", "class": "accessibility"}},
        {text: "#AXSChat", weight: 31, html: {title: "31 occorrenze", "class": "accessibility"}},
        {text: "#CanadiansWithDisabilitiesAct", weight: 13, html: {title: "13 occorrenze", "class": "accessibility"}},
        {text: "#Mojocon", weight: 15, html: {title: "15 occorrenze", "class": "accessibility"}},
        {text: "#PWD", weight: 20, html: {title: "20 occorrenze", "class": "accessibility"}},
        {text: "#CRPD", weight: 10, html: {title: "10 occorrenze", "class": "accessibility"}},
        {text: "#StigmaConf2016", weight: 13, html: {title: "13 occorrenze", "class": "accessibility"}},
        {text: "#LocalGov", weight: 13, html: {title: "13 occorrenze", "class": "accessibility"}},
        {text: "#Architecture", weight: 9, html: {title: "9 occorrenze", "class": "accessibility"}},
        {text: "#Onpoli", weight: 13, html: {title: "13 occorrenze", "class": "accessibility"}},
        {text: "#Ableismexists", weight: 10, html: {title: "10 occorrenze", "class": "accessibility"}},
        
      ];
     $("#accessibility").jQCloud(word_list, {
  width: 500,
  height: 400
    });

      var word_list = [
       {text: "#Usability", weight: 100, html: {title: "656 occorrenze", "class": "usability"}},
        {text: "#UX", weight: 70, html: {title: "428 occorrenze", "class": "usability"}},
        {text: "#UI", weight: 40, html: {title: "110 occorrenze", "class": "usability"}},
        {text: "#WebDesign", weight: 38, html: {title: "107 occorrenze", "class": "usability"}},
        {text: "#Design", weight: 30, html: {title: "67 occorrenze", "class": "usability"}},
        {text: "#Web", weight: 20, html: {title: "25 occorrenze", "class": "usability"}},
        {text: "#Cro", weight: 19, html: {title: "24 occorrenze", "class": "usability"}},
        {text: "#App", weight: 18, html: {title: "22 occorrenze", "class": "usability"}},
        {text: "#UsabilityTesting", weight: 17, html: {title: "21 occorrenze", "class": "usability"}},
        {text: "#Startup", weight: 15, html: {title: "18 occorrenze", "class": "usability"}},
        {text: "#CX", weight: 14, html: {title: "16 occorrenze", "class": "usability"}},
        {text: "#Conversion", weight: 14, html: {title: "16 occorrenze", "class": "usability"}},
        {text: "#Usercentered", weight: 13, html: {title: "15 occorrenze", "class": "usability"}},
        {text: "#Entrepreneur", weight: 12, html: {title: "14 occorrenze", "class": "usability"}},
        {text: "#WebSite", weight: 10, html: {title: "12 occorrenze", "class": "usability"}},
        {text: "#Tweaks", weight: 10, html: {title: "12 occorrenze", "class": "usability"}},
        {text: "#Ugh", weight: 8, html: {title: "10 occorrenze", "class": "usability"}},
        {text: "#Online", weight: 7, html: {title: "9 occorrenze", "class": "usability"}},
        {text: "#Drupal", weight: 7, html: {title: "9 occorrenze", "class": "usability"}},
        {text: "#UXdesign", weight: 7, html: {title: "9 occorrenze", "class": "usability"}},
        
      ];
      $("#usability").jQCloud(word_list, { 
        shape: "rectangular",
  width: 500,
  height: 400
    });

	
    
