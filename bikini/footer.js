// Custom Bikini Map

  $(document).ready(function() {
    $('.map').css({'pointer-events':'none'});
  });

  $('.close-map-icon').click(function() {
    $('.map').css({'pointer-events':'none'});
  });

  $('#mapTriggerMenu,#mapTriggerFooter').click(function() {
    $('.map').css({'pointer-events':'all'});
  });

  $(document).ready(function() {

    function initialize() {

      var gmarkers = [];
      var map = null;
      var infowindow = null;
      var color = '#e51772';

      var styles = [
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#444444"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#e51772"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#e51772"
            },
            {
              "lightness": "42"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "saturation": "0"
            },
            {
              "lightness": "-100"
            },
            {
              "gamma": "0.00"
            },
            {
              "color": "#1a1718"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.icon",
          "stylers": [
            {
              "saturation": "-100"
            },
            {
              "gamma": "0.2"
            },
            {
              "lightness": "-21"
            },
            {
              "weight": "0.01"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-100"
            },
            {
              "lightness": "-15"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "saturation": "0"
            },
            {
              "lightness": "0"
            },
            {
              "color": "#e51772"
            },
            {
              "gamma": "1.20"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text",
          "stylers": [
            {
              "lightness": "-29"
            },
            {
              "weight": "0.01"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "saturation": "-100"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "color": "#ae155c"
            },
            {
              "visibility": "on"
            },
            {
              "lightness": "-52"
            }
          ]
        }
      ];

      var mapOptions = {
        center: new google.maps.LatLng(-8.682853,115.157498),
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        zoomControl: true,
        styles: styles
      };

      map = new google.maps.Map(document.getElementById("mainMap"), mapOptions);

      google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
      });

      var locations = [
        ['Bikini Restaurant Bali', -8.682853,115.157503]
      ];

      /*infowindow = new google.maps.InfoWindow({
        size: new google.maps.Size(150,50)
      });*/
      function setMarkers(locations) {
        for (var i = 0; i < locations.length; i++) {
          var iconBase = 'https://daks2k3a4ib2z.cloudfront.net/595059ab1d62971873de8c32/';
          var location = locations[i];
          var myLatLng = new google.maps.LatLng(location[1], location[2]);
          var marker = new google.maps.Marker({
            position: myLatLng,
            animation: google.maps.Animation.DROP,
            map: map,
            icon: iconBase + '5954cd80ca71cb26ede78186_map-pin-icon.png',
            title: location[0]
          });

          google.maps.event.addListener(marker, "click", function () {
            map.setCenter(marker.getPosition());
            infowindow.setContent(this.html);
            infowindow.open(map, this);
          });
          gmarkers.push(marker);

          bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(-168.999999, -358.999999), 
            new google.maps.LatLng(168.999999, 358.999999));


          rect = new google.maps.Rectangle({
            bounds: bounds,
            fillColor: color,
            fillOpacity: 0.5,
            strokeWeight: 0,
            map: map
          });
        }
      }

      // Add the markers
      setMarkers(locations);

    }

    // add window listener for GMaps
    google.maps.event.addDomListener(window, 'load', initialize);

  });




//Scroll to top on every page load - Essential for IX

  $(document).ready(function(){
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
      setTimeout(function(){
        $('html, body').scrollTop(0);
      }, 0);
    });
  });


//Image Hover Filters - Homepage onhover brightness

  $(document).ready(function(){
    $(".section-link").hover(function() {
      $(this).children('.responsive-image').css({
        'filter': 'brightness(100%)','-webkit-filter': 'brightness(100%)','-moz-filter': 'brightness(100%)','-o-filter': 'brightness(100%)','-ms-filter': 'brightness(100%)'
      });
    }, function() {
      $(this).children('.responsive-image').css({
        'filter': 'brightness(65%)','-webkit-filter': 'brightness(65%)','-moz-filter': 'brightness(65%)','-o-filter': 'brightness(65%)','-ms-filter': 'brightness(65%)'
      });
    });
  });


//Hide Preloader on Scroll Using Webflow's Native IX

  $(window).scroll(function () {

    var ix = Webflow.require('ix');

    var $target1 = $('.logo-preloader');
    var $target2 = $('.preloader');

    var trigger1 = {"type":"click","preserve3d":true,"stepsA":[{"transition":"transform 500ms ease 0","x":"0px","y":"-100%","z":"0px"},{"wait":"1ms"}],"stepsB":[]};
    var trigger2 = {"type":"click","stepsA":[{"wait":"450ms"},{"display":"none"}],"stepsB":[]};

    ix.run(trigger1, $target1);
    ix.run(trigger2, $target2);

  });


//Form Select Logic

  $(document).ready(function() {
      
    $('#groupSize,#preferredPeriod,#preferredTime,#preferredDateLoaded').attr('readonly','readonly');
    $('phone').attr('type','tel');
      
    $('[data-select="groupsize"]').click(function(e) { //update group size on click
      $('#groupSize').val($(this).text()); 
    });
    
    $('[data-select="period"]').click(function(e) { //update lunch/dinner on click
      $('#preferredPeriod').val($(this).text());
      $('#preferredTime').val('');
    });
    
    $('[data-select="time"]').click(function(e) { //update time on click
      $('#preferredTime').val($(this).text()); 
    });
    
    $("#preferredDate").change(function() { //use a hardcoded input to load the webflow date input
         $("#preferredDateLoaded").val($(this).val());
    });
    
    $(function() {
        $('#groupBookingForm').submit(function() { //prevent the hardcoded input from being submitted with the form
            $('#preferredDate', this).prop('disabled', true);
        return true;
        });
    });
  });
  
  
  
//Datepicker Functions
    
    var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};function FlatpickrInstance(element,config){var self=this;self._={};self._.afterDayAnim=afterDayAnim;self._bind=bind;self._compareDates=compareDates;self._setHoursFromDate=setHoursFromDate;self.changeMonth=changeMonth;self.changeYear=changeYear;self.clear=clear;self.close=close;self._createElement=createElement;self.destroy=destroy;self.isEnabled=isEnabled;self.jumpToDate=jumpToDate;self.open=open;self.redraw=redraw;self.set=set;self.setDate=setDate;self.toggle=toggle;function init(){self.element=self.input=element;self.instanceConfig=config||{};self.parseDate=FlatpickrInstance.prototype.parseDate.bind(self);self.formatDate=FlatpickrInstance.prototype.formatDate.bind(self);setupFormats();parseConfig();setupLocale();setupInputs();setupDates();setupHelperFunctions();self.isOpen=!1;self.isMobile=!self.config.disableMobile&&!self.config.inline&&self.config.mode==="single"&&!self.config.disable.length&&!self.config.enable.length&&!self.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(!self.isMobile)build();bindEvents();if(self.selectedDates.length||self.config.noCalendar){if(self.config.enableTime){setHoursFromDate(self.config.noCalendar?self.latestSelectedDateObj||self.config.minDate:null)}
    updateValue()}
    self.showTimeInput=self.selectedDates.length>0||self.config.noCalendar;if(self.config.weekNumbers){self.calendarContainer.style.width=self.daysContainer.offsetWidth+self.weekWrapper.offsetWidth+"px"}
    if(!self.isMobile)positionCalendar();triggerEvent("Ready")}
    function bindToInstance(fn){return fn.bind(self)}
    function updateTime(e){if(self.config.noCalendar&&!self.selectedDates.length)
    self.selectedDates=[self.now];timeWrapper(e);if(!self.selectedDates.length)return;if(!self.minDateHasTime||e.type!=="input"||e.target.value.length>=2){setHoursFromInputs();updateValue()}else{setTimeout(function(){setHoursFromInputs();updateValue()},1000)}}
    function setHoursFromInputs(){if(!self.config.enableTime)return;var hours=(parseInt(self.hourElement.value,10)||0)%(self.amPM?12:24),minutes=(parseInt(self.minuteElement.value,10)||0)%60,seconds=self.config.enableSeconds?(parseInt(self.secondElement.value,10)||0)%60:0;if(self.amPM!==undefined)hours=hours%12+12*(self.amPM.textContent==="PM");if(self.minDateHasTime&&compareDates(self.latestSelectedDateObj,self.config.minDate)===0){hours=Math.max(hours,self.config.minDate.getHours());if(hours===self.config.minDate.getHours())minutes=Math.max(minutes,self.config.minDate.getMinutes())}
    if(self.maxDateHasTime&&compareDates(self.latestSelectedDateObj,self.config.maxDate)===0){hours=Math.min(hours,self.config.maxDate.getHours());if(hours===self.config.maxDate.getHours())minutes=Math.min(minutes,self.config.maxDate.getMinutes())}
    setHours(hours,minutes,seconds)}
    function setHoursFromDate(dateObj){var date=dateObj||self.latestSelectedDateObj;if(date)setHours(date.getHours(),date.getMinutes(),date.getSeconds())}
    function setHours(hours,minutes,seconds){if(self.selectedDates.length){self.latestSelectedDateObj.setHours(hours%24,minutes,seconds||0,0)}
    if(!self.config.enableTime||self.isMobile)return;self.hourElement.value=self.pad(!self.config.time_24hr?(12+hours)%12+12*(hours%12===0):hours);self.minuteElement.value=self.pad(minutes);if(!self.config.time_24hr)self.amPM.textContent=hours>=12?"PM":"AM";if(self.config.enableSeconds===!0)self.secondElement.value=self.pad(seconds)}
    function onYearInput(event){var year=event.target.value;if(event.delta)year=(parseInt(year)+event.delta).toString();if(year.length===4||event.key==="Enter"){self.currentYearElement.blur();if(!/[^\d]/.test(year))changeYear(year)}}
    function bind(element,event,handler){if(event instanceof Array)return event.forEach(function(ev){return bind(element,ev,handler)});if(element instanceof Array)return element.forEach(function(el){return bind(el,event,handler)});element.addEventListener(event,handler);self._handlers.push({element:element,event:event,handler:handler})}
    function onClick(handler){return function(evt){return evt.which===1&&handler(evt)}}
    function bindEvents(){self._handlers=[];self._animationLoop=[];if(self.config.wrap){["open","close","toggle","clear"].forEach(function(evt){Array.prototype.forEach.call(self.element.querySelectorAll("[data-"+evt+"]"),function(el){return bind(el,"mousedown",onClick(self[evt]))})})}
    if(self.isMobile)return setupMobile();self.debouncedResize=debounce(onResize,50);self.triggerChange=function(){triggerEvent("Change")};self.debouncedChange=debounce(self.triggerChange,300);if(self.config.mode==="range"&&self.daysContainer)bind(self.daysContainer,"mouseover",function(e){return onMouseOver(e.target)});bind(window.document.body,"keydown",onKeyDown);if(!self.config.static)bind(self._input,"keydown",onKeyDown);if(!self.config.inline&&!self.config.static)bind(window,"resize",self.debouncedResize);if(window.ontouchstart!==undefined)bind(window.document,"touchstart",documentClick);bind(window.document,"mousedown",onClick(documentClick));bind(self._input,"blur",documentClick);if(self.config.clickOpens===!0){bind(self._input,"focus",self.open);bind(self._input,"mousedown",onClick(self.open))}
    if(!self.config.noCalendar){self.monthNav.addEventListener("wheel",function(e){return e.preventDefault()});bind(self.monthNav,"wheel",debounce(onMonthNavScroll,10));bind(self.monthNav,"mousedown",onClick(onMonthNavClick));bind(self.monthNav,["keyup","increment"],onYearInput);bind(self.daysContainer,"mousedown",onClick(selectDate));if(self.config.animate){bind(self.daysContainer,["webkitAnimationEnd","animationend"],animateDays);bind(self.monthNav,["webkitAnimationEnd","animationend"],animateMonths)}}
    if(self.config.enableTime){var selText=function selText(e){return e.target.select()};bind(self.timeContainer,["wheel","input","increment"],updateTime);bind(self.timeContainer,"mousedown",onClick(timeIncrement));bind(self.timeContainer,["wheel","increment"],self.debouncedChange);bind(self.timeContainer,"input",self.triggerChange);bind([self.hourElement,self.minuteElement],"focus",selText);if(self.secondElement!==undefined)bind(self.secondElement,"focus",function(){return self.secondElement.select()});if(self.amPM!==undefined){bind(self.amPM,"mousedown",onClick(function(e){updateTime(e);self.triggerChange(e)}))}}}
    function processPostDayAnimation(){for(var i=self._animationLoop.length;i--;){self._animationLoop[i]();self._animationLoop.splice(i,1)}}
    function animateDays(e){if(self.daysContainer.childNodes.length>1){switch(e.animationName){case "fpSlideLeft":self.daysContainer.lastChild.classList.remove("slideLeftNew");self.daysContainer.removeChild(self.daysContainer.firstChild);self.days=self.daysContainer.firstChild;processPostDayAnimation();break;case "fpSlideRight":self.daysContainer.firstChild.classList.remove("slideRightNew");self.daysContainer.removeChild(self.daysContainer.lastChild);self.days=self.daysContainer.firstChild;processPostDayAnimation();break;default:break}}}
    function animateMonths(e){switch(e.animationName){case "fpSlideLeftNew":case "fpSlideRightNew":self.navigationCurrentMonth.classList.remove("slideLeftNew");self.navigationCurrentMonth.classList.remove("slideRightNew");var nav=self.navigationCurrentMonth;while(nav.nextSibling&&/curr/.test(nav.nextSibling.className)){self.monthNav.removeChild(nav.nextSibling)}while(nav.previousSibling&&/curr/.test(nav.previousSibling.className)){self.monthNav.removeChild(nav.previousSibling)}self.oldCurMonth=null;break}}
    function jumpToDate(jumpDate){jumpDate=jumpDate?self.parseDate(jumpDate):self.latestSelectedDateObj||(self.config.minDate>self.now?self.config.minDate:self.config.maxDate&&self.config.maxDate<self.now?self.config.maxDate:self.now);try{self.currentYear=jumpDate.getFullYear();self.currentMonth=jumpDate.getMonth()}catch(e){console.error(e.stack);console.warn("Invalid date supplied: "+jumpDate)}
    self.redraw()}
    function timeIncrement(e){if(~e.target.className.indexOf("arrow"))incrementNumInput(e,e.target.classList.contains("arrowUp")?1:-1)}
    function incrementNumInput(e,delta,inputElem){var input=inputElem||e.target.parentNode.childNodes[0];var event=createEvent("increment");event.delta=delta;input.dispatchEvent(event)}
    function createNumberInput(inputClassName){var wrapper=createElement("div","numInputWrapper"),numInput=createElement("input","numInput "+inputClassName),arrowUp=createElement("span","arrowUp"),arrowDown=createElement("span","arrowDown");numInput.type="text";numInput.pattern="\\d*";wrapper.appendChild(numInput);wrapper.appendChild(arrowUp);wrapper.appendChild(arrowDown);return wrapper}
    function build(){var fragment=window.document.createDocumentFragment();self.calendarContainer=createElement("div","flatpickr-calendar");self.calendarContainer.tabIndex=-1;if(!self.config.noCalendar){fragment.appendChild(buildMonthNav());self.innerContainer=createElement("div","flatpickr-innerContainer");if(self.config.weekNumbers)self.innerContainer.appendChild(buildWeeks());self.rContainer=createElement("div","flatpickr-rContainer");self.rContainer.appendChild(buildWeekdays());if(!self.daysContainer){self.daysContainer=createElement("div","flatpickr-days");self.daysContainer.tabIndex=-1}
    buildDays();self.rContainer.appendChild(self.daysContainer);self.innerContainer.appendChild(self.rContainer);fragment.appendChild(self.innerContainer)}
    if(self.config.enableTime)fragment.appendChild(buildTime());toggleClass(self.calendarContainer,"rangeMode",self.config.mode==="range");toggleClass(self.calendarContainer,"animate",self.config.animate);self.calendarContainer.appendChild(fragment);var customAppend=self.config.appendTo&&self.config.appendTo.nodeType;if(self.config.inline||self.config.static){self.calendarContainer.classList.add(self.config.inline?"inline":"static");if(self.config.inline&&!customAppend){return self.element.parentNode.insertBefore(self.calendarContainer,self._input.nextSibling)}
    if(self.config.static){var wrapper=createElement("div","flatpickr-wrapper");self.element.parentNode.insertBefore(wrapper,self.element);wrapper.appendChild(self.element);if(self.altInput)wrapper.appendChild(self.altInput);wrapper.appendChild(self.calendarContainer);return}}(customAppend?self.config.appendTo:window.document.body).appendChild(self.calendarContainer)}
    function createDay(className,date,dayNumber,i){var dateIsEnabled=isEnabled(date,!0),dayElement=createElement("span","flatpickr-day "+className,date.getDate());dayElement.dateObj=date;dayElement.$i=i;dayElement.setAttribute("aria-label",self.formatDate(date,self.config.ariaDateFormat));if(compareDates(date,self.now)===0){self.todayDateElem=dayElement;dayElement.classList.add("today")}
    if(dateIsEnabled){dayElement.tabIndex=-1;if(isDateSelected(date)){dayElement.classList.add("selected");self.selectedDateElem=dayElement;if(self.config.mode==="range"){toggleClass(dayElement,"startRange",compareDates(date,self.selectedDates[0])===0);toggleClass(dayElement,"endRange",compareDates(date,self.selectedDates[1])===0)}}}else{dayElement.classList.add("disabled");if(self.selectedDates[0]&&date>self.minRangeDate&&date<self.selectedDates[0])self.minRangeDate=date;else if(self.selectedDates[0]&&date<self.maxRangeDate&&date>self.selectedDates[0])self.maxRangeDate=date}
    if(self.config.mode==="range"){if(isDateInRange(date)&&!isDateSelected(date))dayElement.classList.add("inRange");if(self.selectedDates.length===1&&(date<self.minRangeDate||date>self.maxRangeDate))dayElement.classList.add("notAllowed")}
    if(self.config.weekNumbers&&className!=="prevMonthDay"&&dayNumber%7===1){self.weekNumbers.insertAdjacentHTML("beforeend","<span class='disabled flatpickr-day'>"+self.config.getWeek(date)+"</span>")}
    triggerEvent("DayCreate",dayElement);return dayElement}
    function focusOnDay(currentIndex,offset){var newIndex=currentIndex+offset||0,targetNode=currentIndex!==undefined?self.days.childNodes[newIndex]:self.selectedDateElem||self.todayDateElem||self.days.childNodes[0],focus=function focus(){targetNode=targetNode||self.days.childNodes[newIndex];targetNode.focus();if(self.config.mode==="range")onMouseOver(targetNode)};if(targetNode===undefined&&offset!==0){if(offset>0){self.changeMonth(1);newIndex=newIndex%42}else if(offset<0){self.changeMonth(-1);newIndex+=42}
    return afterDayAnim(focus)}
    focus()}
    function afterDayAnim(fn){if(self.config.animate===!0)return self._animationLoop.push(fn);fn()}
    function buildDays(delta){var firstOfMonth=(new Date(self.currentYear,self.currentMonth,1).getDay()-self.l10n.firstDayOfWeek+7)%7,isRangeMode=self.config.mode==="range";self.prevMonthDays=self.utils.getDaysinMonth((self.currentMonth-1+12)%12);self.selectedDateElem=undefined;self.todayDateElem=undefined;var daysInMonth=self.utils.getDaysinMonth(),days=window.document.createDocumentFragment();var dayNumber=self.prevMonthDays+1-firstOfMonth,dayIndex=0;if(self.config.weekNumbers&&self.weekNumbers.firstChild)self.weekNumbers.textContent="";if(isRangeMode){self.minRangeDate=new Date(self.currentYear,self.currentMonth-1,dayNumber);self.maxRangeDate=new Date(self.currentYear,self.currentMonth+1,(42-firstOfMonth)%daysInMonth)}
    for(;dayNumber<=self.prevMonthDays;dayNumber++,dayIndex++){days.appendChild(createDay("prevMonthDay",new Date(self.currentYear,self.currentMonth-1,dayNumber),dayNumber,dayIndex))}
    for(dayNumber=1;dayNumber<=daysInMonth;dayNumber++,dayIndex++){days.appendChild(createDay("",new Date(self.currentYear,self.currentMonth,dayNumber),dayNumber,dayIndex))}
    for(var dayNum=daysInMonth+1;dayNum<=42-firstOfMonth;dayNum++,dayIndex++){days.appendChild(createDay("nextMonthDay",new Date(self.currentYear,self.currentMonth+1,dayNum%daysInMonth),dayNum,dayIndex))}
    if(isRangeMode&&self.selectedDates.length===1&&days.childNodes[0]){self._hidePrevMonthArrow=self._hidePrevMonthArrow||self.minRangeDate>days.childNodes[0].dateObj;self._hideNextMonthArrow=self._hideNextMonthArrow||self.maxRangeDate<new Date(self.currentYear,self.currentMonth+1,1)}else updateNavigationCurrentMonth();var dayContainer=createElement("div","dayContainer");dayContainer.appendChild(days);if(!self.config.animate||delta===undefined)clearNode(self.daysContainer);else{while(self.daysContainer.childNodes.length>1){self.daysContainer.removeChild(self.daysContainer.firstChild)}}
    if(delta>=0)self.daysContainer.appendChild(dayContainer);else self.daysContainer.insertBefore(dayContainer,self.daysContainer.firstChild);self.days=self.daysContainer.firstChild;return self.daysContainer}
    function clearNode(node){while(node.firstChild){node.removeChild(node.firstChild)}}
    function buildMonthNav(){var monthNavFragment=window.document.createDocumentFragment();self.monthNav=createElement("div","flatpickr-month");self.prevMonthNav=createElement("span","flatpickr-prev-month");self.prevMonthNav.innerHTML=self.config.prevArrow;self.currentMonthElement=createElement("span","cur-month");self.currentMonthElement.title=self.l10n.scrollTitle;var yearInput=createNumberInput("cur-year");self.currentYearElement=yearInput.childNodes[0];self.currentYearElement.title=self.l10n.scrollTitle;if(self.config.minDate)self.currentYearElement.min=self.config.minDate.getFullYear();if(self.config.maxDate){self.currentYearElement.max=self.config.maxDate.getFullYear();self.currentYearElement.disabled=self.config.minDate&&self.config.minDate.getFullYear()===self.config.maxDate.getFullYear()}
    self.nextMonthNav=createElement("span","flatpickr-next-month");self.nextMonthNav.innerHTML=self.config.nextArrow;self.navigationCurrentMonth=createElement("span","flatpickr-current-month");self.navigationCurrentMonth.appendChild(self.currentMonthElement);self.navigationCurrentMonth.appendChild(yearInput);monthNavFragment.appendChild(self.prevMonthNav);monthNavFragment.appendChild(self.navigationCurrentMonth);monthNavFragment.appendChild(self.nextMonthNav);self.monthNav.appendChild(monthNavFragment);Object.defineProperty(self,"_hidePrevMonthArrow",{get:function get(){return this.__hidePrevMonthArrow},set:function set(bool){if(this.__hidePrevMonthArrow!==bool)self.prevMonthNav.style.display=bool?"none":"block";this.__hidePrevMonthArrow=bool}});Object.defineProperty(self,"_hideNextMonthArrow",{get:function get(){return this.__hideNextMonthArrow},set:function set(bool){if(this.__hideNextMonthArrow!==bool)self.nextMonthNav.style.display=bool?"none":"block";this.__hideNextMonthArrow=bool}});updateNavigationCurrentMonth();return self.monthNav}
    function buildTime(){self.calendarContainer.classList.add("hasTime");if(self.config.noCalendar)self.calendarContainer.classList.add("noCalendar");self.timeContainer=createElement("div","flatpickr-time");self.timeContainer.tabIndex=-1;var separator=createElement("span","flatpickr-time-separator",":");var hourInput=createNumberInput("flatpickr-hour");self.hourElement=hourInput.childNodes[0];var minuteInput=createNumberInput("flatpickr-minute");self.minuteElement=minuteInput.childNodes[0];self.hourElement.tabIndex=self.minuteElement.tabIndex=-1;self.hourElement.value=self.pad(self.latestSelectedDateObj?self.latestSelectedDateObj.getHours():self.config.defaultHour);self.minuteElement.value=self.pad(self.latestSelectedDateObj?self.latestSelectedDateObj.getMinutes():self.config.defaultMinute);self.hourElement.step=self.config.hourIncrement;self.minuteElement.step=self.config.minuteIncrement;self.hourElement.min=self.config.time_24hr?0:1;self.hourElement.max=self.config.time_24hr?23:12;self.minuteElement.min=0;self.minuteElement.max=59;self.hourElement.title=self.minuteElement.title=self.l10n.scrollTitle;self.timeContainer.appendChild(hourInput);self.timeContainer.appendChild(separator);self.timeContainer.appendChild(minuteInput);if(self.config.time_24hr)self.timeContainer.classList.add("time24hr");if(self.config.enableSeconds){self.timeContainer.classList.add("hasSeconds");var secondInput=createNumberInput("flatpickr-second");self.secondElement=secondInput.childNodes[0];self.secondElement.value=self.latestSelectedDateObj?self.pad(self.latestSelectedDateObj.getSeconds()):"00";self.secondElement.step=self.minuteElement.step;self.secondElement.min=self.minuteElement.min;self.secondElement.max=self.minuteElement.max;self.timeContainer.appendChild(createElement("span","flatpickr-time-separator",":"));self.timeContainer.appendChild(secondInput)}
    if(!self.config.time_24hr){self.amPM=createElement("span","flatpickr-am-pm",["AM","PM"][self.hourElement.value>11|0]);self.amPM.title=self.l10n.toggleTitle;self.amPM.tabIndex=-1;self.timeContainer.appendChild(self.amPM)}
    return self.timeContainer}
    function buildWeekdays(){if(!self.weekdayContainer)self.weekdayContainer=createElement("div","flatpickr-weekdays");var firstDayOfWeek=self.l10n.firstDayOfWeek;var weekdays=self.l10n.weekdays.shorthand.slice();if(firstDayOfWeek>0&&firstDayOfWeek<weekdays.length){weekdays=[].concat(weekdays.splice(firstDayOfWeek,weekdays.length),weekdays.splice(0,firstDayOfWeek))}
    self.weekdayContainer.innerHTML="\n\t\t<span class=flatpickr-weekday>\n\t\t\t"+weekdays.join("</span><span class=flatpickr-weekday>")+"\n\t\t</span>\n\t\t";return self.weekdayContainer}
    function buildWeeks(){self.calendarContainer.classList.add("hasWeeks");self.weekWrapper=createElement("div","flatpickr-weekwrapper");self.weekWrapper.appendChild(createElement("span","flatpickr-weekday",self.l10n.weekAbbreviation));self.weekNumbers=createElement("div","flatpickr-weeks");self.weekWrapper.appendChild(self.weekNumbers);return self.weekWrapper}
    function changeMonth(value,is_offset,animate){is_offset=is_offset===undefined||is_offset;var delta=is_offset?value:value-self.currentMonth;var skipAnimations=!self.config.animate||animate===!1;if(delta<0&&self._hidePrevMonthArrow||delta>0&&self._hideNextMonthArrow)return;self.currentMonth+=delta;if(self.currentMonth<0||self.currentMonth>11){self.currentYear+=self.currentMonth>11?1:-1;self.currentMonth=(self.currentMonth+12)%12;triggerEvent("YearChange")}
    buildDays(!skipAnimations?delta:undefined);if(skipAnimations){triggerEvent("MonthChange");return updateNavigationCurrentMonth()}
    var nav=self.navigationCurrentMonth;if(delta<0){while(nav.nextSibling&&/curr/.test(nav.nextSibling.className)){self.monthNav.removeChild(nav.nextSibling)}}else if(delta>0){while(nav.previousSibling&&/curr/.test(nav.previousSibling.className)){self.monthNav.removeChild(nav.previousSibling)}}
    self.oldCurMonth=self.navigationCurrentMonth;self.navigationCurrentMonth=self.monthNav.insertBefore(self.oldCurMonth.cloneNode(!0),delta>0?self.oldCurMonth.nextSibling:self.oldCurMonth);if(delta>0){self.daysContainer.firstChild.classList.add("slideLeft");self.daysContainer.lastChild.classList.add("slideLeftNew");self.oldCurMonth.classList.add("slideLeft");self.navigationCurrentMonth.classList.add("slideLeftNew")}else if(delta<0){self.daysContainer.firstChild.classList.add("slideRightNew");self.daysContainer.lastChild.classList.add("slideRight");self.oldCurMonth.classList.add("slideRight");self.navigationCurrentMonth.classList.add("slideRightNew")}
    self.currentMonthElement=self.navigationCurrentMonth.firstChild;self.currentYearElement=self.navigationCurrentMonth.lastChild.childNodes[0];updateNavigationCurrentMonth();self.oldCurMonth.firstChild.textContent=self.utils.monthToStr(self.currentMonth-delta);triggerEvent("MonthChange");if(document.activeElement&&document.activeElement.$i){var index=document.activeElement.$i;afterDayAnim(function(){focusOnDay(index,0)})}}
    function clear(triggerChangeEvent){self.input.value="";if(self.altInput)self.altInput.value="";if(self.mobileInput)self.mobileInput.value="";self.selectedDates=[];self.latestSelectedDateObj=undefined;self.showTimeInput=!1;self.redraw();if(triggerChangeEvent!==!1)
    triggerEvent("Change")}
    function close(){self.isOpen=!1;if(!self.isMobile){self.calendarContainer.classList.remove("open");self._input.classList.remove("active")}
    triggerEvent("Close")}
    function destroy(){if(self.config!==undefined)triggerEvent("Destroy");for(var i=self._handlers.length;i--;){var h=self._handlers[i];h.element.removeEventListener(h.event,h.handler)}
    self._handlers=[];if(self.mobileInput){if(self.mobileInput.parentNode)self.mobileInput.parentNode.removeChild(self.mobileInput);self.mobileInput=null}else if(self.calendarContainer&&self.calendarContainer.parentNode)self.calendarContainer.parentNode.removeChild(self.calendarContainer);if(self.altInput){self.input.type="text";if(self.altInput.parentNode)self.altInput.parentNode.removeChild(self.altInput);delete self.altInput}
    if(self.input){self.input.type=self.input._type;self.input.classList.remove("flatpickr-input");self.input.removeAttribute("readonly");self.input.value=""}["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(k){return delete self[k]})}
    function isCalendarElem(elem){if(self.config.appendTo&&self.config.appendTo.contains(elem))return!0;return self.calendarContainer.contains(elem)}
    function documentClick(e){if(self.isOpen&&!self.config.inline){var isCalendarElement=isCalendarElem(e.target);var isInput=e.target===self.input||e.target===self.altInput||self.element.contains(e.target)||e.path&&e.path.indexOf&&(~e.path.indexOf(self.input)||~e.path.indexOf(self.altInput));var lostFocus=e.type==="blur"?isInput&&e.relatedTarget&&!isCalendarElem(e.relatedTarget):!isInput&&!isCalendarElement;if(lostFocus&&self.config.ignoredFocusElements.indexOf(e.target)===-1){self.close();if(self.config.mode==="range"&&self.selectedDates.length===1){self.clear(!1);self.redraw()}}}}
    function changeYear(newYear){if(!newYear||self.currentYearElement.min&&newYear<self.currentYearElement.min||self.currentYearElement.max&&newYear>self.currentYearElement.max)return;var newYearNum=parseInt(newYear,10),isNewYear=self.currentYear!==newYearNum;self.currentYear=newYearNum||self.currentYear;if(self.config.maxDate&&self.currentYear===self.config.maxDate.getFullYear()){self.currentMonth=Math.min(self.config.maxDate.getMonth(),self.currentMonth)}else if(self.config.minDate&&self.currentYear===self.config.minDate.getFullYear()){self.currentMonth=Math.max(self.config.minDate.getMonth(),self.currentMonth)}
    if(isNewYear){self.redraw();triggerEvent("YearChange")}}
    function isEnabled(date,timeless){if(self.config.minDate&&compareDates(date,self.config.minDate,timeless!==undefined?timeless:!self.minDateHasTime)<0||self.config.maxDate&&compareDates(date,self.config.maxDate,timeless!==undefined?timeless:!self.maxDateHasTime)>0)return!1;if(!self.config.enable.length&&!self.config.disable.length)return!0;var dateToCheck=self.parseDate(date,null,!0);var bool=self.config.enable.length>0,array=bool?self.config.enable:self.config.disable;for(var i=0,d;i<array.length;i++){d=array[i];if(d instanceof Function&&d(dateToCheck))
    return bool;else if(d instanceof Date&&d.getTime()===dateToCheck.getTime())
    return bool;else if(typeof d==="string"&&self.parseDate(d,null,!0).getTime()===dateToCheck.getTime())
    return bool;else if((typeof d==="undefined"?"undefined":_typeof(d))==="object"&&d.from&&d.to&&dateToCheck>=d.from&&dateToCheck<=d.to)return bool}
    return!bool}
    function onKeyDown(e){var isInput=e.target===self._input;var calendarElem=isCalendarElem(e.target);var allowInput=self.config.allowInput;var allowKeydown=self.isOpen&&(!allowInput||!isInput);var allowInlineKeydown=self.config.inline&&isInput&&!allowInput;if(e.key==="Enter"&&allowInput&&isInput){self.setDate(self._input.value,!0,e.target===self.altInput?self.config.altFormat:self.config.dateFormat);return e.target.blur()}else if(calendarElem||allowKeydown||allowInlineKeydown){var isTimeObj=self.timeContainer&&self.timeContainer.contains(e.target);switch(e.key){case "Enter":if(isTimeObj)updateValue();else selectDate(e);break;case "Escape":e.preventDefault();self.close();break;case "ArrowLeft":case "ArrowRight":if(!isTimeObj){e.preventDefault();if(self.daysContainer){var _delta=e.key==="ArrowRight"?1:-1;if(!e.ctrlKey)focusOnDay(e.target.$i,_delta);else changeMonth(_delta,!0)}else if(self.config.enableTime&&!isTimeObj)self.hourElement.focus()}
    break;case "ArrowUp":case "ArrowDown":e.preventDefault();var delta=e.key==="ArrowDown"?1:-1;if(self.daysContainer){if(e.ctrlKey){changeYear(self.currentYear-delta);focusOnDay(e.target.$i,0)}else if(!isTimeObj)focusOnDay(e.target.$i,delta*7)}else if(self.config.enableTime){if(!isTimeObj)self.hourElement.focus();updateTime(e)}
    break;case "Tab":if(e.target===self.hourElement){e.preventDefault();self.minuteElement.select()}else if(e.target===self.minuteElement&&(self.secondElement||self.amPM)){e.preventDefault();(self.secondElement||self.amPM).focus()}else if(e.target===self.secondElement){e.preventDefault();self.amPM.focus()}
    break;case "a":if(e.target===self.amPM){self.amPM.textContent="AM";setHoursFromInputs();updateValue()}
    break;case "p":if(e.target===self.amPM){self.amPM.textContent="PM";setHoursFromInputs();updateValue()}
    break;default:break}
    triggerEvent("KeyDown",e)}}
    function onMouseOver(elem){if(self.selectedDates.length!==1||!elem.classList.contains("flatpickr-day"))return;var hoverDate=elem.dateObj,initialDate=self.parseDate(self.selectedDates[0],null,!0),rangeStartDate=Math.min(hoverDate.getTime(),self.selectedDates[0].getTime()),rangeEndDate=Math.max(hoverDate.getTime(),self.selectedDates[0].getTime()),containsDisabled=!1;for(var t=rangeStartDate;t<rangeEndDate;t+=self.utils.duration.DAY){if(!isEnabled(new Date(t))){containsDisabled=!0;break}}
    var _loop=function _loop(timestamp,i){var outOfRange=timestamp<self.minRangeDate.getTime()||timestamp>self.maxRangeDate.getTime(),dayElem=self.days.childNodes[i];if(outOfRange){self.days.childNodes[i].classList.add("notAllowed");["inRange","startRange","endRange"].forEach(function(c){dayElem.classList.remove(c)});return "continue"}else if(containsDisabled&&!outOfRange)return "continue";["startRange","inRange","endRange","notAllowed"].forEach(function(c){dayElem.classList.remove(c)});var minRangeDate=Math.max(self.minRangeDate.getTime(),rangeStartDate),maxRangeDate=Math.min(self.maxRangeDate.getTime(),rangeEndDate);elem.classList.add(hoverDate<self.selectedDates[0]?"startRange":"endRange");if(initialDate<hoverDate&&timestamp===initialDate.getTime())dayElem.classList.add("startRange");else if(initialDate>hoverDate&&timestamp===initialDate.getTime())dayElem.classList.add("endRange");if(timestamp>=minRangeDate&&timestamp<=maxRangeDate)dayElem.classList.add("inRange")};for(var timestamp=self.days.childNodes[0].dateObj.getTime(),i=0;i<42;i++,timestamp+=self.utils.duration.DAY){var _ret=_loop(timestamp,i);if(_ret==="continue")continue}}
    function onResize(){if(self.isOpen&&!self.config.static&&!self.config.inline)positionCalendar()}
    function open(e,positionElement){if(self.isMobile){if(e){e.preventDefault();e.target.blur()}
    setTimeout(function(){self.mobileInput.click()},0);triggerEvent("Open");return}
    if(self.isOpen||self._input.disabled||self.config.inline)return;self.isOpen=!0;self.calendarContainer.classList.add("open");positionCalendar(positionElement);self._input.classList.add("active");triggerEvent("Open")}
    function minMaxDateSetter(type){return function(date){var dateObj=self.config["_"+type+"Date"]=self.parseDate(date);var inverseDateObj=self.config["_"+(type==="min"?"max":"min")+"Date"];var isValidDate=date&&dateObj instanceof Date;if(isValidDate){self[type+"DateHasTime"]=dateObj.getHours()||dateObj.getMinutes()||dateObj.getSeconds()}
    if(self.selectedDates){self.selectedDates=self.selectedDates.filter(function(d){return isEnabled(d)});if(!self.selectedDates.length&&type==="min")setHoursFromDate(dateObj);updateValue()}
    if(self.daysContainer){redraw();if(isValidDate)self.currentYearElement[type]=dateObj.getFullYear();else self.currentYearElement.removeAttribute(type);self.currentYearElement.disabled=inverseDateObj&&dateObj&&inverseDateObj.getFullYear()===dateObj.getFullYear()}}}
    function parseConfig(){var boolOpts=["wrap","weekNumbers","allowInput","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"];var hooks=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange"];self.config=Object.create(flatpickr.defaultConfig);var userConfig=_extends({},self.instanceConfig,JSON.parse(JSON.stringify(self.element.dataset||{})));self.config.parseDate=userConfig.parseDate;self.config.formatDate=userConfig.formatDate;Object.defineProperty(self.config,"enable",{get:function get(){return self.config._enable||[]},set:function set(dates){return self.config._enable=parseDateRules(dates)}});Object.defineProperty(self.config,"disable",{get:function get(){return self.config._disable||[]},set:function set(dates){return self.config._disable=parseDateRules(dates)}});_extends(self.config,userConfig);if(!userConfig.dateFormat&&userConfig.enableTime){self.config.dateFormat=self.config.noCalendar?"H:i"+(self.config.enableSeconds?":S":""):flatpickr.defaultConfig.dateFormat+" H:i"+(self.config.enableSeconds?":S":"")}
    if(userConfig.altInput&&userConfig.enableTime&&!userConfig.altFormat){self.config.altFormat=self.config.noCalendar?"h:i"+(self.config.enableSeconds?":S K":" K"):flatpickr.defaultConfig.altFormat+(" h:i"+(self.config.enableSeconds?":S":"")+" K")}
    Object.defineProperty(self.config,"minDate",{get:function get(){return this._minDate},set:minMaxDateSetter("min")});Object.defineProperty(self.config,"maxDate",{get:function get(){return this._maxDate},set:minMaxDateSetter("max")});self.config.minDate=userConfig.minDate;self.config.maxDate=userConfig.maxDate;for(var i=0;i<boolOpts.length;i++){self.config[boolOpts[i]]=self.config[boolOpts[i]]===!0||self.config[boolOpts[i]]==="true"}for(var _i=hooks.length;_i--;){if(self.config[hooks[_i]]!==undefined){self.config[hooks[_i]]=arrayify(self.config[hooks[_i]]||[]).map(bindToInstance)}}
    for(var _i2=0;_i2<self.config.plugins.length;_i2++){var pluginConf=self.config.plugins[_i2](self)||{};for(var key in pluginConf){if(self.config[key]instanceof Array||~hooks.indexOf(key)){self.config[key]=arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key])}else if(typeof userConfig[key]==="undefined")self.config[key]=pluginConf[key]}}
    triggerEvent("ParseConfig")}
    function setupLocale(){if(_typeof(self.config.locale)!=="object"&&typeof flatpickr.l10ns[self.config.locale]==="undefined")console.warn("flatpickr: invalid locale "+self.config.locale);self.l10n=_extends(Object.create(flatpickr.l10ns.default),_typeof(self.config.locale)==="object"?self.config.locale:self.config.locale!=="default"?flatpickr.l10ns[self.config.locale]||{}:{})}
    function positionCalendar(){var positionElement=arguments.length>0&&arguments[0]!==undefined?arguments[0]:self._positionElement;if(self.calendarContainer===undefined)return;var calendarHeight=self.calendarContainer.offsetHeight,calendarWidth=self.calendarContainer.offsetWidth,configPos=self.config.position,inputBounds=positionElement.getBoundingClientRect(),distanceFromBottom=window.innerHeight-inputBounds.bottom,showOnTop=configPos==="above"||configPos!=="below"&&distanceFromBottom<calendarHeight&&inputBounds.top>calendarHeight;var top=window.pageYOffset+inputBounds.top+(!showOnTop?positionElement.offsetHeight+2:-calendarHeight-2);toggleClass(self.calendarContainer,"arrowTop",!showOnTop);toggleClass(self.calendarContainer,"arrowBottom",showOnTop);if(self.config.inline)return;var left=window.pageXOffset+inputBounds.left;var right=window.document.body.offsetWidth-inputBounds.right;var rightMost=left+calendarWidth>window.document.body.offsetWidth;toggleClass(self.calendarContainer,"rightMost",rightMost);if(self.config.static)return;self.calendarContainer.style.top=top+"px";if(!rightMost){self.calendarContainer.style.left=left+"px";self.calendarContainer.style.right="auto"}else{self.calendarContainer.style.left="auto";self.calendarContainer.style.right=right+"px"}}
    function redraw(){if(self.config.noCalendar||self.isMobile)return;buildWeekdays();updateNavigationCurrentMonth();buildDays()}
    function selectDate(e){e.preventDefault();e.stopPropagation();if(!e.target.classList.contains("flatpickr-day")||e.target.classList.contains("disabled")||e.target.classList.contains("notAllowed"))return;var selectedDate=self.latestSelectedDateObj=new Date(e.target.dateObj.getTime());var shouldChangeMonth=selectedDate.getMonth()!==self.currentMonth&&self.config.mode!=="range";self.selectedDateElem=e.target;if(self.config.mode==="single")self.selectedDates=[selectedDate];else if(self.config.mode==="multiple"){var selectedIndex=isDateSelected(selectedDate);if(selectedIndex)self.selectedDates.splice(selectedIndex,1);else self.selectedDates.push(selectedDate)}else if(self.config.mode==="range"){if(self.selectedDates.length===2)self.clear();self.selectedDates.push(selectedDate);if(compareDates(selectedDate,self.selectedDates[0],!0)!==0)self.selectedDates.sort(function(a,b){return a.getTime()-b.getTime()})}
    setHoursFromInputs();if(shouldChangeMonth){var isNewYear=self.currentYear!==selectedDate.getFullYear();self.currentYear=selectedDate.getFullYear();self.currentMonth=selectedDate.getMonth();if(isNewYear)triggerEvent("YearChange");triggerEvent("MonthChange")}
    buildDays();if(self.minDateHasTime&&self.config.enableTime&&compareDates(selectedDate,self.config.minDate)===0)setHoursFromDate(self.config.minDate);updateValue();if(self.config.enableTime)setTimeout(function(){return self.showTimeInput=!0},50);if(self.config.mode==="range"){if(self.selectedDates.length===1){onMouseOver(e.target);self._hidePrevMonthArrow=self._hidePrevMonthArrow||self.minRangeDate>self.days.childNodes[0].dateObj;self._hideNextMonthArrow=self._hideNextMonthArrow||self.maxRangeDate<new Date(self.currentYear,self.currentMonth+1,1)}else updateNavigationCurrentMonth()}
    triggerEvent("Change");if(!shouldChangeMonth)focusOnDay(e.target.$i,0);else afterDayAnim(function(){return self.selectedDateElem.focus()});if(self.config.enableTime)setTimeout(function(){return self.hourElement.select()},451);if(self.config.closeOnSelect){var single=self.config.mode==="single"&&!self.config.enableTime;var range=self.config.mode==="range"&&self.selectedDates.length===2&&!self.config.enableTime;if(single||range)self.close()}}
    function set(option,value){self.config[option]=value;self.redraw();jumpToDate()}
    function setSelectedDate(inputDate,format){if(inputDate instanceof Array)self.selectedDates=inputDate.map(function(d){return self.parseDate(d,format)});else if(inputDate instanceof Date||!isNaN(inputDate))self.selectedDates=[self.parseDate(inputDate,format)];else if(inputDate&&inputDate.substring){switch(self.config.mode){case "single":self.selectedDates=[self.parseDate(inputDate,format)];break;case "multiple":self.selectedDates=inputDate.split("; ").map(function(date){return self.parseDate(date,format)});break;case "range":self.selectedDates=inputDate.split(self.l10n.rangeSeparator).map(function(date){return self.parseDate(date,format)});break;default:break}}
    self.selectedDates=self.selectedDates.filter(function(d){return d instanceof Date&&isEnabled(d,!1)});self.selectedDates.sort(function(a,b){return a.getTime()-b.getTime()})}
    function setDate(date,triggerChange,format){if(date!==0&&!date)return self.clear(triggerChange);setSelectedDate(date,format);self.showTimeInput=self.selectedDates.length>0;self.latestSelectedDateObj=self.selectedDates[0];self.redraw();jumpToDate();setHoursFromDate();updateValue(triggerChange);if(triggerChange)triggerEvent("Change")}
    function parseDateRules(arr){for(var i=arr.length;i--;){if(typeof arr[i]==="string"||+arr[i])arr[i]=self.parseDate(arr[i],null,!0);else if(arr[i]&&arr[i].from&&arr[i].to){arr[i].from=self.parseDate(arr[i].from);arr[i].to=self.parseDate(arr[i].to)}}
    return arr.filter(function(x){return x})}
    function setupDates(){self.selectedDates=[];self.now=new Date();var preloadedDate=self.config.defaultDate||self.input.value;if(preloadedDate)setSelectedDate(preloadedDate,self.config.dateFormat);var initialDate=self.selectedDates.length?self.selectedDates[0]:self.config.minDate&&self.config.minDate.getTime()>self.now?self.config.minDate:self.config.maxDate&&self.config.maxDate.getTime()<self.now?self.config.maxDate:self.now;self.currentYear=initialDate.getFullYear();self.currentMonth=initialDate.getMonth();if(self.selectedDates.length)self.latestSelectedDateObj=self.selectedDates[0];self.minDateHasTime=self.config.minDate&&(self.config.minDate.getHours()||self.config.minDate.getMinutes()||self.config.minDate.getSeconds());self.maxDateHasTime=self.config.maxDate&&(self.config.maxDate.getHours()||self.config.maxDate.getMinutes()||self.config.maxDate.getSeconds());Object.defineProperty(self,"latestSelectedDateObj",{get:function get(){return self._selectedDateObj||self.selectedDates[self.selectedDates.length-1]},set:function set(date){self._selectedDateObj=date}});if(!self.isMobile){Object.defineProperty(self,"showTimeInput",{get:function get(){return self._showTimeInput},set:function set(bool){self._showTimeInput=bool;if(self.calendarContainer)toggleClass(self.calendarContainer,"showTimeInput",bool);positionCalendar()}})}}
    function setupHelperFunctions(){self.utils={duration:{DAY:86400000},getDaysinMonth:function getDaysinMonth(month,yr){month=typeof month==="undefined"?self.currentMonth:month;yr=typeof yr==="undefined"?self.currentYear:yr;if(month===1&&(yr%4===0&&yr%100!==0||yr%400===0))return 29;return self.l10n.daysInMonth[month]},monthToStr:function monthToStr(monthNumber,shorthand){shorthand=typeof shorthand==="undefined"?self.config.shorthandCurrentMonth:shorthand;return self.l10n.months[(shorthand?"short":"long")+"hand"][monthNumber]}}}
    function setupFormats(){self.formats=Object.create(FlatpickrInstance.prototype.formats);["D","F","J","M","W","l"].forEach(function(f){self.formats[f]=FlatpickrInstance.prototype.formats[f].bind(self)});self.revFormat.F=FlatpickrInstance.prototype.revFormat.F.bind(self);self.revFormat.M=FlatpickrInstance.prototype.revFormat.M.bind(self)}
    function setupInputs(){self.input=self.config.wrap?self.element.querySelector("[data-input]"):self.element;if(!self.input)return console.warn("Error: invalid input element specified",self.input);self.input._type=self.input.type;self.input.type="text";self.input.classList.add("flatpickr-input");self._input=self.input;if(self.config.altInput){self.altInput=createElement(self.input.nodeName,self.input.className+" "+self.config.altInputClass);self._input=self.altInput;self.altInput.placeholder=self.input.placeholder;self.altInput.disabled=self.input.disabled;self.altInput.required=self.input.required;self.altInput.type="text";self.input.type="hidden";if(!self.config.static&&self.input.parentNode)self.input.parentNode.insertBefore(self.altInput,self.input.nextSibling)}
    if(!self.config.allowInput)self._input.setAttribute("readonly","readonly");self._positionElement=self.config.positionElement||self._input}
    function setupMobile(){var inputType=self.config.enableTime?self.config.noCalendar?"time":"datetime-local":"date";self.mobileInput=createElement("input",self.input.className+" flatpickr-mobile");self.mobileInput.step="any";self.mobileInput.tabIndex=1;self.mobileInput.type=inputType;self.mobileInput.disabled=self.input.disabled;self.mobileInput.placeholder=self.input.placeholder;self.mobileFormatStr=inputType==="datetime-local"?"Y-m-d\\TH:i:S":inputType==="date"?"Y-m-d":"H:i:S";if(self.selectedDates.length){self.mobileInput.defaultValue=self.mobileInput.value=self.formatDate(self.selectedDates[0],self.mobileFormatStr)}
    if(self.config.minDate)self.mobileInput.min=self.formatDate(self.config.minDate,"Y-m-d");if(self.config.maxDate)self.mobileInput.max=self.formatDate(self.config.maxDate,"Y-m-d");self.input.type="hidden";if(self.config.altInput)self.altInput.type="hidden";try{self.input.parentNode.insertBefore(self.mobileInput,self.input.nextSibling)}catch(e){}
    self.mobileInput.addEventListener("change",function(e){self.setDate(e.target.value,!1,self.mobileFormatStr);triggerEvent("Change");triggerEvent("Close")})}
    function toggle(){if(self.isOpen)return self.close();self.open()}
    function triggerEvent(event,data){var hooks=self.config["on"+event];if(hooks!==undefined&&hooks.length>0){for(var i=0;hooks[i]&&i<hooks.length;i++){hooks[i](self.selectedDates,self.input.value,self,data)}}
    if(event==="Change"){self.input.dispatchEvent(createEvent("change"));self.input.dispatchEvent(createEvent("input"))}}
    function createEvent(name){if(self._supportsEvents)return new Event(name,{bubbles:!0});self._[name+"Event"]=document.createEvent("Event");self._[name+"Event"].initEvent(name,!0,!0);return self._[name+"Event"]}
    function isDateSelected(date){for(var i=0;i<self.selectedDates.length;i++){if(compareDates(self.selectedDates[i],date)===0)return ""+i}
    return!1}
    function isDateInRange(date){if(self.config.mode!=="range"||self.selectedDates.length<2)return!1;return compareDates(date,self.selectedDates[0])>=0&&compareDates(date,self.selectedDates[1])<=0}
    function updateNavigationCurrentMonth(){if(self.config.noCalendar||self.isMobile||!self.monthNav)return;self.currentMonthElement.textContent=self.utils.monthToStr(self.currentMonth)+" ";self.currentYearElement.value=self.currentYear;self._hidePrevMonthArrow=self.config.minDate&&(self.currentYear===self.config.minDate.getFullYear()?self.currentMonth<=self.config.minDate.getMonth():self.currentYear<self.config.minDate.getFullYear());self._hideNextMonthArrow=self.config.maxDate&&(self.currentYear===self.config.maxDate.getFullYear()?self.currentMonth+1>self.config.maxDate.getMonth():self.currentYear>self.config.maxDate.getFullYear())}
    function updateValue(triggerChange){if(!self.selectedDates.length)return self.clear(triggerChange);if(self.isMobile){self.mobileInput.value=self.selectedDates.length?self.formatDate(self.latestSelectedDateObj,self.mobileFormatStr):""}
    var joinChar=self.config.mode!=="range"?"; ":self.l10n.rangeSeparator;self.input.value=self.selectedDates.map(function(dObj){return self.formatDate(dObj,self.config.dateFormat)}).join(joinChar);if(self.config.altInput){self.altInput.value=self.selectedDates.map(function(dObj){return self.formatDate(dObj,self.config.altFormat)}).join(joinChar)}
    if(triggerChange!==!1)triggerEvent("ValueUpdate")}
    function mouseDelta(e){return Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY))}
    function onMonthNavScroll(e){e.preventDefault();var isYear=self.currentYearElement.parentNode.contains(e.target);if(e.target===self.currentMonthElement||isYear){var delta=mouseDelta(e);if(isYear){changeYear(self.currentYear+delta);e.target.value=self.currentYear}else self.changeMonth(delta,!0,!1)}}
    function onMonthNavClick(e){var isPrevMonth=self.prevMonthNav.contains(e.target);var isNextMonth=self.nextMonthNav.contains(e.target);if(isPrevMonth||isNextMonth)changeMonth(isPrevMonth?-1:1);else if(e.target===self.currentYearElement){e.preventDefault();self.currentYearElement.select()}else if(e.target.className==="arrowUp")self.changeYear(self.currentYear+1);else if(e.target.className==="arrowDown")self.changeYear(self.currentYear-1)}
    function createElement(tag,className,content){var e=window.document.createElement(tag);className=className||"";content=content||"";e.className=className;if(content!==undefined)e.textContent=content;return e}
    function arrayify(obj){if(obj instanceof Array)return obj;return[obj]}
    function toggleClass(elem,className,bool){if(bool)return elem.classList.add(className);elem.classList.remove(className)}
    function debounce(func,wait,immediate){var timeout=void 0;return function(){var context=this,args=arguments;clearTimeout(timeout);timeout=setTimeout(function(){timeout=null;if(!immediate)func.apply(context,args)},wait);if(immediate&&!timeout)func.apply(context,args)}}
    function compareDates(date1,date2,timeless){if(!(date1 instanceof Date)||!(date2 instanceof Date))return!1;if(timeless!==!1){return new Date(date1.getTime()).setHours(0,0,0,0)-new Date(date2.getTime()).setHours(0,0,0,0)}
    return date1.getTime()-date2.getTime()}
    function timeWrapper(e){e.preventDefault();var isKeyDown=e.type==="keydown",isWheel=e.type==="wheel",isIncrement=e.type==="increment",input=e.target;if(self.amPM&&e.target===self.amPM)return e.target.textContent=["AM","PM"][e.target.textContent==="AM"|0];var min=Number(input.min),max=Number(input.max),step=Number(input.step),curValue=parseInt(input.value,10),delta=e.delta||(!isKeyDown?Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY))||0:e.which===38?1:-1);var newValue=curValue+step*delta;if(typeof input.value!=="undefined"&&input.value.length===2){var isHourElem=input===self.hourElement,isMinuteElem=input===self.minuteElement;if(newValue<min){newValue=max+newValue+!isHourElem+(isHourElem&&!self.amPM);if(isMinuteElem)incrementNumInput(null,-1,self.hourElement)}else if(newValue>max){newValue=input===self.hourElement?newValue-max-!self.amPM:min;if(isMinuteElem)incrementNumInput(null,1,self.hourElement)}
    if(self.amPM&&isHourElem&&(step===1?newValue+curValue===23:Math.abs(newValue-curValue)>step))self.amPM.textContent=self.amPM.textContent==="PM"?"AM":"PM";input.value=self.pad(newValue)}}
    init();return self}
    FlatpickrInstance.prototype={formats:{Z:function Z(date){return date.toISOString()},D:function D(date){return this.l10n.weekdays.shorthand[this.formats.w(date)]},F:function F(date){return this.utils.monthToStr(this.formats.n(date)-1,!1)},G:function G(date){return FlatpickrInstance.prototype.pad(FlatpickrInstance.prototype.formats.h(date))},H:function H(date){return FlatpickrInstance.prototype.pad(date.getHours())},J:function J(date){return date.getDate()+this.l10n.ordinal(date.getDate())},K:function K(date){return date.getHours()>11?"PM":"AM"},M:function M(date){return this.utils.monthToStr(date.getMonth(),!0)},S:function S(date){return FlatpickrInstance.prototype.pad(date.getSeconds())},U:function U(date){return date.getTime()/1000},W:function W(date){return this.config.getWeek(date)},Y:function Y(date){return date.getFullYear()},d:function d(date){return FlatpickrInstance.prototype.pad(date.getDate())},h:function h(date){return date.getHours()%12?date.getHours()%12:12},i:function i(date){return FlatpickrInstance.prototype.pad(date.getMinutes())},j:function j(date){return date.getDate()},l:function l(date){return this.l10n.weekdays.longhand[date.getDay()]},m:function m(date){return FlatpickrInstance.prototype.pad(date.getMonth()+1)},n:function n(date){return date.getMonth()+1},s:function s(date){return date.getSeconds()},w:function w(date){return date.getDay()},y:function y(date){return String(date.getFullYear()).substring(2)}},formatDate:function formatDate(dateObj,frmt){var _this=this;if(this.config!==undefined&&this.config.formatDate!==undefined)return this.config.formatDate(dateObj,frmt);return frmt.split("").map(function(c,i,arr){return _this.formats[c]&&arr[i-1]!=="\\"?_this.formats[c](dateObj):c!=="\\"?c:""}).join("")},revFormat:{D:function D(){},F:function F(dateObj,monthName){dateObj.setMonth(this.l10n.months.longhand.indexOf(monthName))},G:function G(dateObj,hour){dateObj.setHours(parseFloat(hour))},H:function H(dateObj,hour){dateObj.setHours(parseFloat(hour))},J:function J(dateObj,day){dateObj.setDate(parseFloat(day))},K:function K(dateObj,amPM){var hours=dateObj.getHours();if(hours!==12)dateObj.setHours(hours%12+12*/pm/i.test(amPM))},M:function M(dateObj,shortMonth){dateObj.setMonth(this.l10n.months.shorthand.indexOf(shortMonth))},S:function S(dateObj,seconds){dateObj.setSeconds(seconds)},U:function U(dateObj,unixSeconds){return new Date(parseFloat(unixSeconds)*1000)},W:function W(dateObj,weekNumber){weekNumber=parseInt(weekNumber);return new Date(dateObj.getFullYear(),0,2+(weekNumber-1)*7,0,0,0,0,0)},Y:function Y(dateObj,year){dateObj.setFullYear(year)},Z:function Z(dateObj,ISODate){return new Date(ISODate)},d:function d(dateObj,day){dateObj.setDate(parseFloat(day))},h:function h(dateObj,hour){dateObj.setHours(parseFloat(hour))},i:function i(dateObj,minutes){dateObj.setMinutes(parseFloat(minutes))},j:function j(dateObj,day){dateObj.setDate(parseFloat(day))},l:function l(){},m:function m(dateObj,month){dateObj.setMonth(parseFloat(month)-1)},n:function n(dateObj,month){dateObj.setMonth(parseFloat(month)-1)},s:function s(dateObj,seconds){dateObj.setSeconds(parseFloat(seconds))},w:function w(){},y:function y(dateObj,year){dateObj.setFullYear(2000+parseFloat(year))}},tokenRegex:{D:"(\\w+)",F:"(\\w+)",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"(am|AM|Am|aM|pm|PM|Pm|pM)",M:"(\\w+)",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"(\\w+)",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},pad:function pad(number){return("0"+number).slice(-2)},parseDate:function parseDate(date,givenFormat,timeless){if(date!==0&&!date)return null;var date_orig=date;if(date instanceof Date)date=new Date(date.getTime());else if(date.toFixed!==undefined)
    date=new Date(date);else{var format=givenFormat||(this.config||flatpickr.defaultConfig).dateFormat;date=String(date).trim();if(date==="today"){date=new Date();timeless=!0}else if(/Z$/.test(date)||/GMT$/.test(date))
    date=new Date(date);else if(this.config&&this.config.parseDate)date=this.config.parseDate(date,format);else{var parsedDate=!this.config||!this.config.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0));var matched=void 0;for(var i=0,matchIndex=0,regexStr="";i<format.length;i++){var token=format[i];var isBackSlash=token==="\\";var escaped=format[i-1]==="\\"||isBackSlash;if(this.tokenRegex[token]&&!escaped){regexStr+=this.tokenRegex[token];var match=new RegExp(regexStr).exec(date);if(match&&(matched=!0)){parsedDate=this.revFormat[token](parsedDate,match[++matchIndex])||parsedDate}}else if(!isBackSlash)regexStr+="."}
    date=matched?parsedDate:null}}
    if(!(date instanceof Date)){console.warn("flatpickr: invalid date "+date_orig);console.info(this.element);return null}
    if(timeless===!0)date.setHours(0,0,0,0);return date}};function _flatpickr(nodeList,config){var nodes=Array.prototype.slice.call(nodeList);var instances=[];for(var i=0;i<nodes.length;i++){try{if(nodes[i].getAttribute("data-fp-omit")!==null)continue;if(nodes[i]._flatpickr){nodes[i]._flatpickr.destroy();nodes[i]._flatpickr=null}
    nodes[i]._flatpickr=new FlatpickrInstance(nodes[i],config||{});instances.push(nodes[i]._flatpickr)}catch(e){console.warn(e,e.stack)}}
    return instances.length===1?instances[0]:instances}
    if(typeof HTMLElement!=="undefined"){HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(config){return _flatpickr(this,config)};HTMLElement.prototype.flatpickr=function(config){return _flatpickr([this],config)}}
    function flatpickr(selector,config){if(selector instanceof NodeList)return _flatpickr(selector,config);else if(!(selector instanceof HTMLElement))return _flatpickr(window.document.querySelectorAll(selector),config);return _flatpickr([selector],config)}
    flatpickr.defaultConfig=FlatpickrInstance.defaultConfig={mode:"single",position:"auto",animate:window.navigator.userAgent.indexOf("MSIE")===-1,wrap:!1,weekNumbers:!1,allowInput:!1,clickOpens:!0,closeOnSelect:!0,time_24hr:!1,enableTime:!1,noCalendar:!1,dateFormat:"Y-m-d",ariaDateFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",altFormat:"F j, Y",defaultDate:null,minDate:null,maxDate:null,parseDate:null,formatDate:null,getWeek:function getWeek(givenDate){var date=new Date(givenDate.getTime());var onejan=new Date(date.getFullYear(),0,1);return Math.ceil(((date-onejan)/86400000+onejan.getDay()+1)/7)},enable:[],disable:[],shorthandCurrentMonth:!1,inline:!1,"static":!1,appendTo:null,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",enableSeconds:!1,hourIncrement:1,minuteIncrement:5,defaultHour:12,defaultMinute:0,disableMobile:!1,locale:"default",plugins:[],ignoredFocusElements:[],onClose:undefined,onChange:undefined,onDayCreate:undefined,onMonthChange:undefined,onOpen:undefined,onParseConfig:undefined,onReady:undefined,onValueUpdate:undefined,onYearChange:undefined,onKeyDown:undefined,onDestroy:undefined};flatpickr.l10ns={en:{weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function ordinal(nth){var s=nth%100;if(s>3&&s<21)return "th";switch(s%10){case 1:return "st";case 2:return "nd";case 3:return "rd";default:return "th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle"}};flatpickr.l10ns.default=Object.create(flatpickr.l10ns.en);flatpickr.localize=function(l10n){return _extends(flatpickr.l10ns.default,l10n||{})};flatpickr.setDefaults=function(config){return _extends(flatpickr.defaultConfig,config||{})};if(typeof jQuery!=="undefined"){jQuery.fn.flatpickr=function(config){return _flatpickr(this,config)}}
    Date.prototype.fp_incr=function(days){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+parseInt(days,10))};if(typeof module!=="undefined")module.exports=flatpickr ;
    
    $("#preferredDate").flatpickr("minDate":"today","inline":"true");
                                  
                                  
                                  
