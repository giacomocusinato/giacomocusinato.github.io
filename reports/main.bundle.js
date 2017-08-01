webpackJsonp([1,4],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services___ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginService, toastService, router) {
        this.loginService = loginService;
        this.toastService = toastService;
        this.router = router;
        this.inputType = 'password';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['']);
    };
    LoginComponent.prototype.toggleInputType = function () {
        this.inputType == 'password' ?
            this.inputType = 'text' :
            this.inputType = 'password';
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-login',
        template: __webpack_require__(485)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services___["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services___["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services___["b" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services___["b" /* ToastService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_calendar_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivitiesComponent = (function () {
    function ActivitiesComponent(subjectService, activityService, jobService, activityTypeService, toastService, errors) {
        this.subjectService = subjectService;
        this.activityService = activityService;
        this.jobService = jobService;
        this.activityTypeService = activityTypeService;
        this.toastService = toastService;
        this.errors = errors;
        this.jobs = [];
        this.selectedEmployee = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["h" /* Subject */]();
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["h" /* Subject */]();
        this.selectedJob = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["g" /* Job */]();
        this.activityTypes = [];
        this.newActivity = this.emptyActivity();
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectService.getSubjects().subscribe(function (data) {
            _this.subjects = data;
            _this.selectedEmployee = _this.subjects[0];
            _this.newActivity.EmployeeId = _this.selectedEmployee.Id;
            _this.getActivities();
        }, function (error) { return console.log(error); });
        this.activityTypeService.getActivityTypes().subscribe(function (data) { return _this.activityTypes = data; }, function (error) { return console.log(error); });
        this.jobService.getJobs().subscribe(function (data) { return _this.jobs = data; }, function (error) { return console.log(error); });
        this.errors.reset();
    };
    ActivitiesComponent.prototype.employeeChanged = function (subject) {
        this.selectedEmployee = subject;
        this.newActivity.EmployeeId = subject.Id;
        this.getActivities();
    };
    ActivitiesComponent.prototype.clientChanged = function (client) {
        this.getJobs(client.Id);
        this.selectedTask = undefined;
        this.selectedSubtask = undefined;
    };
    ActivitiesComponent.prototype.jobChanged = function (job) {
        this.newActivity.ParentId = job.Id;
        this.selectedTask = undefined;
        this.selectedSubtask = undefined;
    };
    ActivitiesComponent.prototype.taskChanged = function (task) {
        this.newActivity.ParentId =
            !!task.Id ? task.Id : this.selectedJob.Id;
        this.selectedSubtask = undefined;
    };
    ActivitiesComponent.prototype.subtaskChanged = function (task) {
        this.newActivity.ParentId =
            !!task.Id ? task.Id : this.selectedTask.Id;
    };
    ActivitiesComponent.prototype.activityTypeChanged = function (activityType) {
        if (!this.newActivity.Description)
            this.newActivity.Description = activityType.Name;
    };
    ActivitiesComponent.prototype.dayChanged = function (day) {
        this.selectedDay = day;
        this.newActivity.Date = day;
    };
    ActivitiesComponent.prototype.monthChanged = function (month) {
        this.selectedMonth = month;
        this.getActivities();
    };
    ActivitiesComponent.prototype.createActivityClick = function () {
        var _this = this;
        console.log(this.newActivity);
        if (!this.newActivity.Description || !this.newActivity.WorkedHours) {
            this.errors.forms.createActivity.emptyFields = true;
        }
        else {
            this.activityService.createActivity(this.newActivity).subscribe(function (data) {
                console.log(data);
                _this.activities.push(data);
                _this.calendar.generateEvents(_this.activities);
                _this.errors.forms.createActivity.emptyFields = false;
                _this.toastService.activityCreated(true);
            }, function (error) {
                _this.errors.forms.createActivity.emptyFields = false;
                _this.toastService.activityCreated(false);
            });
        }
    };
    ActivitiesComponent.prototype.deleteActivityClick = function (activity, index) {
        var _this = this;
        this.activityService.deleteActivity(activity).subscribe(function () {
            _this.activities.splice(index, 1);
            _this.toastService.activityDeleted(true);
            _this.calendar.generateEvents(_this.activities);
        }, function (error) { return _this.toastService.activityDeleted(false); });
    };
    ActivitiesComponent.prototype.isSelectedDay = function (isoDate) {
        var date = new Date(isoDate);
        return this.selectedDay.toDateString() == date.toDateString();
    };
    ActivitiesComponent.prototype.emptyActivities = function () {
        var date = this.selectedDay;
        return this.activities.filter(function (entry) {
            return date.toDateString() == new Date(entry.Date).toDateString();
        }).length == 0;
    };
    ActivitiesComponent.prototype.emptyActivity = function () {
        var activity = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["a" /* Activity */]();
        activity.TypeId = 'board_machine';
        activity.EmployeeId = this.selectedEmployee.Id;
        return activity;
    };
    ActivitiesComponent.prototype.getActivities = function () {
        var _this = this;
        var date = this.selectedMonth ? this.selectedMonth : new Date();
        this.activityService.getFlatActivitiesByMonth(this.selectedEmployee, date).subscribe(function (data) {
            _this.activities = data;
            _this.calendar.generateEvents(_this.activities);
        }, function (error) { return console.log(error); });
    };
    ActivitiesComponent.prototype.getJobs = function (clientId) {
        var _this = this;
        this.jobService.getJobs(clientId).subscribe(function (data) {
            _this.jobs = data;
            _this.selectedJob = _this.jobs[0];
            _this.jobChanged(_this.selectedJob);
        }, function (error) { return console.log(error); });
    };
    return ActivitiesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__calendar_calendar_component__["a" /* CalendarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_calendar_component__["a" /* CalendarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_calendar_component__["a" /* CalendarComponent */]) === "function" && _a || Object)
], ActivitiesComponent.prototype, "calendar", void 0);
ActivitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-activities',
        template: __webpack_require__(486)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* SubjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["g" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["g" /* ActivityService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["f" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["f" /* JobService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["h" /* ActivityTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["h" /* ActivityTypeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* ToastService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* ErrorService */]) === "function" && _g || Object])
], ActivitiesComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=activities.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_calendar__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_formatter_provider__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarComponent = (function () {
    function CalendarComponent() {
        this.view = 'month';
        this.viewDate = new Date(2017, 7, 7);
        this.locale = 'it';
        this.weekStartsOn = 1;
        this.refresh = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.dayChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.monthChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent.prototype.ngOnChanges = function (changes) {
    };
    CalendarComponent.prototype.dayClicked = function (day) {
        if (this.selectedDay) {
            delete this.selectedDay.cssClass;
        }
        day.cssClass = 'cal-day-selected';
        this.selectedDay = day;
        this.dayChanged.emit(day.date);
    };
    CalendarComponent.prototype.incrementMonth = function () {
        this.viewDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["addMonths"])(this.viewDate, 1);
        this.monthChanged.emit(this.viewDate);
        this.refresh.next();
    };
    CalendarComponent.prototype.decrementMonth = function () {
        this.viewDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_date_fns__["subMonths"])(this.viewDate, 1);
        this.monthChanged.emit(this.viewDate);
        this.refresh.next();
    };
    CalendarComponent.prototype.addBadgeTotal = function (day) {
    };
    CalendarComponent.prototype.generateEvents = function (activities) {
        this.events = [];
        for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
            var activity = activities_1[_i];
            for (var hours = 0; hours < activity.WorkedHours; ++hours) {
                this.events.push({
                    title: activity.Description,
                    start: new Date(activity.Date),
                    color: ''
                });
            }
        }
        this.refresh.next();
    };
    return CalendarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], CalendarComponent.prototype, "dayChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], CalendarComponent.prototype, "monthChanged", void 0);
CalendarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-calendar',
        template: __webpack_require__(487),
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_2_angular_calendar__["a" /* CalendarDateFormatter */],
                useClass: __WEBPACK_IMPORTED_MODULE_4__date_formatter_provider__["a" /* DateFormatter */]
            }]
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);

var _a, _b;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InsertComponent = (function () {
    function InsertComponent(subjectService, jobService, activityService, activityTypeService, toastService, errors) {
        this.subjectService = subjectService;
        this.jobService = jobService;
        this.activityService = activityService;
        this.activityTypeService = activityTypeService;
        this.toastService = toastService;
        this.errors = errors;
        this.activities = [];
        this.selectedEmployee = new __WEBPACK_IMPORTED_MODULE_1__shared_model__["h" /* Subject */]();
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_1__shared_model__["h" /* Subject */]();
        this.selectedJob = new __WEBPACK_IMPORTED_MODULE_1__shared_model__["g" /* Job */]();
        this.selectedActivityType = new __WEBPACK_IMPORTED_MODULE_1__shared_model__["d" /* ActivityType */]();
        this.newActivity = this.emptyActivity();
    }
    InsertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectService.getSubjects().subscribe(function (data) {
            _this.subjects = data;
            _this.selectedEmployee = _this.subjects[0];
            _this.selectedClient = _this.subjects[0];
            _this.newActivity.EmployeeId = _this.selectedEmployee.Id;
            _this.getActivities(_this.selectedEmployee);
            console.log(_this.selectedEmployee);
        }, function (error) { return console.log(error); });
        this.activityTypeService.getActivityTypes().subscribe(function (data) { return _this.activityTypes = data; }, function (error) { return console.log(error); });
    };
    InsertComponent.prototype.dateChanged = function (date) {
        this.newActivity.Date = new Date(date);
        // let day = date.substr(0, 2);
        // let month = date.substr(2, 2);
        // let year = '20' + date.substr(4, 2);
        //
        // if (date.length == 4) {
        //   year = new Date().getFullYear().toString();
        // } else if (date.length != 6) {
        //   this.newActivity.Date = undefined;
        //   return;
        // }
        //
        // this.newActivity.Date = new Date(`${day}-${month}-${year}`);
        //
        // if (this.newActivity.Date == undefined) {
        //   return;
        // }
    };
    InsertComponent.prototype.clientChanged = function (client) {
        this.getJobs(client.Id);
        this.selectedTask = undefined;
        this.selectedSubtask = undefined;
    };
    InsertComponent.prototype.jobChanged = function (job) {
        this.newActivity.ParentId = job.Id;
        this.selectedTask = undefined;
        this.selectedSubtask = undefined;
    };
    InsertComponent.prototype.taskChanged = function (task) {
        this.newActivity.ParentId =
            !!task.Id ? task.Id : this.selectedJob.Id;
        this.selectedSubtask = undefined;
    };
    InsertComponent.prototype.subtaskChanged = function (task) {
        this.newActivity.ParentId =
            !!task.Id ? task.Id : this.selectedTask.Id;
    };
    InsertComponent.prototype.activityTypeChanged = function (activityType) {
        this.newActivity.TypeId = activityType.Id;
        this.newActivity.Description = activityType.Name;
    };
    InsertComponent.prototype.createActivityClick = function () {
        var _this = this;
        this.foucusFirstInput();
        if (!this.newActivity.TypeId ||
            !this.newActivity.WorkedHours ||
            !this.newActivity.EmployeeId ||
            !this.newActivity.ParentId ||
            !this.newActivity.Date) {
            this.errors.forms.createActivity.emptyFields = true;
        }
        else {
            this.activityService.createActivity(this.newActivity).subscribe(function (data) {
                _this.activities.push(data);
                _this.errors.forms.createActivity.emptyFields = false;
                _this.toastService.activityCreated(true);
            }, function (error) {
                _this.errors.forms.createActivity.emptyFields = false;
                _this.toastService.activityCreated(false);
            });
        }
    };
    InsertComponent.prototype.createActivityTab = function (event) {
        event.preventDefault();
        this.foucusFirstInput();
    };
    InsertComponent.prototype.foucusFirstInput = function () {
        this.firstInput.nativeElement.focus();
    };
    InsertComponent.prototype.getJobs = function (clientId) {
        var _this = this;
        this.jobService.getJobs(clientId).subscribe(function (data) {
            _this.jobs = data;
            _this.selectedJob = _this.jobs[0];
            _this.jobChanged(_this.selectedJob);
        }, function (error) { return console.log(error); });
    };
    InsertComponent.prototype.emptyActivity = function () {
        var activity = new __WEBPACK_IMPORTED_MODULE_1__shared_model__["a" /* Activity */]();
        activity.TypeId = 'board_machine';
        activity.EmployeeId = this.selectedEmployee.Id;
        // TODO: handle parent task
        return activity;
    };
    InsertComponent.prototype.getActivities = function (employee, month) {
        var _this = this;
        if (month === void 0) { month = null; }
        if (month == null) {
            month = new Date();
        }
        this.activityService.getFlatActivitiesByMonth(employee, month).subscribe(function (data) {
            _this.activities = data;
        }, function (error) { return console.log(error); });
    };
    return InsertComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('firstInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], InsertComponent.prototype, "firstInput", void 0);
InsertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-insert',
        template: __webpack_require__(488)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* SubjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["f" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["f" /* JobService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["g" /* ActivityService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["h" /* ActivityTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["h" /* ActivityTypeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* ToastService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* ErrorService */]) === "function" && _g || Object])
], InsertComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=insert.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobsComponent = (function () {
    function JobsComponent(subjectService, jobService, jobTypeService, toastService, router, errors) {
        this.subjectService = subjectService;
        this.jobService = jobService;
        this.jobTypeService = jobTypeService;
        this.toastService = toastService;
        this.router = router;
        this.errors = errors;
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["h" /* Subject */]();
        this.newJob = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["g" /* Job */]();
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectService.getSubjects().subscribe(function (data) {
            _this.subjects = data;
            _this.selectedClient = data.find(function (s) { return s.Types.indexOf('client') > -1; });
            _this.newJob = _this.emptyJob();
            _this.getJobs(_this.selectedClient.Id);
        }, function (error) { return console.log(error); });
        this.jobTypeService.getJobTypes().subscribe(function (data) {
            _this.jobTypes = data;
        }, function (error) { return console.log(error); });
        // this.jobService.printJob() {
        //
        // }
        this.errors.reset();
    };
    JobsComponent.prototype.createJobClick = function () {
        var _this = this;
        if (!!this.newJob.Code) {
            this.jobService.createJob(this.newJob).subscribe(function (data) {
                _this.jobs.push(data);
                _this.newJob = _this.emptyJob();
                _this.toastService.jobCreated(true);
                _this.errors.forms.createJob.codeRequired = false;
            }, function (error) { return _this.toastService.jobCreated(false); });
        }
        else {
            this.errors.forms.createJob.codeRequired = true;
            this.toastService.taskCreated(false);
        }
    };
    JobsComponent.prototype.clientChanged = function (subject) {
        this.selectedClient = subject;
        this.newJob = this.emptyJob();
        this.getJobs(this.selectedClient.Id);
    };
    JobsComponent.prototype.goToEditJob = function (job) {
        this.jobService.jobToEdit = job;
        this.router.navigate(['jobs', job.Code]);
    };
    JobsComponent.prototype.isEmployer = function (subject) {
        return subject.Types.indexOf('client') != -1 ||
            subject.Types.indexOf('organization') != -1;
    };
    JobsComponent.prototype.getJobs = function (clientId) {
        var _this = this;
        this.jobService.getJobs(clientId).subscribe(function (data) { return _this.jobs = data; }, function (error) { return console.log(error); });
    };
    JobsComponent.prototype.emptyJob = function () {
        var job = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["g" /* Job */]();
        job.ClientId = this.selectedClient.Id;
        return job;
    };
    return JobsComponent;
}());
JobsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-jobs',
        template: __webpack_require__(489)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* SubjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["f" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["f" /* JobService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["i" /* JobTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["i" /* JobTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* ToastService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* ErrorService */]) === "function" && _f || Object])
], JobsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=jobs.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TasksComponent = (function () {
    function TasksComponent(subjectService, jobService, jobTypeService, taskTypeService, toastService, errors, router, location) {
        this.subjectService = subjectService;
        this.jobService = jobService;
        this.jobTypeService = jobTypeService;
        this.taskTypeService = taskTypeService;
        this.toastService = toastService;
        this.errors = errors;
        this.router = router;
        this.location = location;
        this.newTask = new __WEBPACK_IMPORTED_MODULE_3__shared_model__["c" /* Task */]();
        this.editTaskOpen = false;
        this.editSubtaskIndex = -1;
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.jobService.jobToEdit == undefined) {
            this.job = new __WEBPACK_IMPORTED_MODULE_3__shared_model__["g" /* Job */]();
            this.router.navigate(['jobs']);
        }
        else {
            this.job = this.jobService.jobToEdit;
            this.subjectService.getSubjects().subscribe(function (data) { return _this.subjects = data; }, function (error) { return console.log(error); });
            this.jobTypeService.getJobTypes().subscribe(function (data) { return _this.jobTypes = data; }, function (error) { return console.log(error); });
            this.taskTypeService.getTaskTypes().subscribe(function (data) { return _this.taskTypes = data; }, function (error) { return console.log(error); });
            this.errors.reset();
        }
    };
    TasksComponent.prototype.updateJobClick = function () {
        var _this = this;
        if (!!this.job.Code) {
            this.jobService.updateJob(this.job).subscribe(function (data) {
                _this.toastService.jobUpdated(true);
                _this.editSubtaskIndex = -1;
            }, function (error) { return _this.toastService.jobUpdated(false); });
            this.errors.forms.updateJob.codeRequired = false;
        }
        else {
            this.errors.forms.updateJob.codeRequired = true;
        }
    };
    TasksComponent.prototype.deleteJobClick = function () {
        var _this = this;
        this.jobService.deleteJob(this.job).subscribe(function () {
            _this.toastService.jobDeleted(true);
            _this.goBack();
        }, function (error) { return _this.toastService.jobDeleted(false); });
    };
    TasksComponent.prototype.createTaskClick = function () {
        if (!!this.newTask.Code) {
            this.job.Tasks.push(this.newTask);
            this.newTask = new __WEBPACK_IMPORTED_MODULE_3__shared_model__["c" /* Task */]();
            this.errors.forms.createTask.codeRequired = false;
        }
        else {
            this.errors.forms.createTask.codeRequired = true;
        }
    };
    TasksComponent.prototype.deleteTaskClick = function (task) {
        task.IsDeleted = true;
    };
    TasksComponent.prototype.deleteSubtaskClick = function (subtask) {
        subtask.IsDeleted = true;
    };
    TasksComponent.prototype.addSubtaskClick = function () {
        // TODO: check if existing sites are filled before creating a new openedSite
        if (!this.job.Tasks[this.editTaskIndex].Subtasks)
            this.job.Tasks[this.editTaskIndex].Subtasks = [];
        this.job.Tasks[this.editTaskIndex].Subtasks.push(new __WEBPACK_IMPORTED_MODULE_3__shared_model__["c" /* Task */]());
        this.editSubtaskIndex = this.job.Tasks[this.editTaskIndex].Subtasks.length - 1;
    };
    TasksComponent.prototype.goBack = function () {
        this.location.back();
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-tasks',
        template: __webpack_require__(490)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services__["e" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services__["e" /* SubjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services__["f" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services__["f" /* JobService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services__["i" /* JobTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services__["i" /* JobTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services__["j" /* TaskTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services__["j" /* TaskTypeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services__["b" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services__["b" /* ToastService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services__["d" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services__["d" /* ErrorService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _h || Object])
], TasksComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=tasks.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubjectEditComponent = (function () {
    function SubjectEditComponent(subjectService, location, router) {
        this.subjectService = subjectService;
        this.location = location;
        this.router = router;
        // Initialize to avoid error on the view
        this.subject = new __WEBPACK_IMPORTED_MODULE_3__shared_model__["h" /* Subject */]();
        this.subject.Types = [''];
    }
    SubjectEditComponent.prototype.ngOnInit = function () {
        if (this.subjectService.subjectToEdit == undefined) {
            this.router.navigate(['subjects']);
        }
        else {
            this.subject = this.subjectService.subjectToEdit;
        }
    };
    SubjectEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    return SubjectEditComponent;
}());
SubjectEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-subject-edit',
        template: __webpack_require__(491)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services__["e" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services__["e" /* SubjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SubjectEditComponent);

var _a, _b, _c;
//# sourceMappingURL=subject-edit.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubjectsComponent = (function () {
    function SubjectsComponent(subjectService, router) {
        this.subjectService = subjectService;
        this.router = router;
        this.selectedType = 'employee';
        this.openedSite = 0;
        // Initialize newSubject for the form
        this.newSubject = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["h" /* Subject */]();
    }
    SubjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectService.getSubjects().subscribe(function (data) { return _this.subjects = data; }, function (error) { return console.log(error); });
    };
    SubjectsComponent.prototype.addSiteForm = function () {
        if (!this.newSubject.Sites)
            this.newSubject.Sites = [];
        // TODO: check empty sites creations
        this.openedSite =
            this.newSubject.Sites.push(new __WEBPACK_IMPORTED_MODULE_2__shared_model__["i" /* Site */]()) - 1;
    };
    SubjectsComponent.prototype.goToEditSubject = function (subject) {
        this.subjectService.subjectToEdit = subject;
        this.router.navigate(['subjects', subject.Id]);
    };
    SubjectsComponent.prototype.subjectCreated = function (newSubject) {
        this.subjects.push(newSubject);
    };
    return SubjectsComponent;
}());
SubjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-subjects',
        template: __webpack_require__(493)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* SubjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SubjectsComponent);

var _a, _b;
//# sourceMappingURL=subjects.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TypesComponent = (function () {
    function TypesComponent(jobTypeService, taskTypeService, activityTypeService, toastService, router, errors) {
        this.jobTypeService = jobTypeService;
        this.taskTypeService = taskTypeService;
        this.activityTypeService = activityTypeService;
        this.toastService = toastService;
        this.router = router;
        this.errors = errors;
        this.selectedType = 'job';
        this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["f" /* JobType */]();
        this.editing = false;
    }
    TypesComponent.prototype.ngOnInit = function () {
        this.getTypes();
    };
    TypesComponent.prototype.elementChanged = function (jobElement) {
        this.selectedType = jobElement;
        this.types = [];
        this.getTypes();
        this.errors.forms.createType.codeRequired = false;
    };
    TypesComponent.prototype.openEditClick = function (type) {
        this.editing = true;
        this.newType = type;
    };
    TypesComponent.prototype.noEditClick = function () {
        this.editing = false;
        switch (this.selectedType) {
            case 'job':
                this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["f" /* JobType */]();
                break;
            case 'task':
                this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["e" /* TaskType */]();
                break;
            case 'activity':
                this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["d" /* ActivityType */]();
                break;
        }
    };
    TypesComponent.prototype.createTypeClick = function () {
        var _this = this;
        if (this.selectedType != 'activity') {
            if (!this.newType.Code || !this.newType.Name) {
                this.errors.forms.createType.codeRequired = true;
                return;
            }
            if (this.selectedType == 'job') {
                this.jobTypeService.createJobType(this.newType).subscribe(function (data) {
                    _this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["f" /* JobType */]();
                    _this.finalizeTypeCreation(data);
                }, function (error) { return console.log(error); });
            }
            else {
                this.taskTypeService.createTaskType(this.newType).subscribe(function (data) {
                    _this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["e" /* TaskType */]();
                    _this.finalizeTypeCreation(data);
                }, function (error) { return console.log(error); });
            }
        }
        else {
            if (!this.newType.Name) {
                this.errors.forms.createType.codeRequired = true;
                return;
            }
            this.activityTypeService.createActivityType(this.newType).subscribe(function (data) {
                _this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["d" /* ActivityType */]();
                _this.finalizeTypeCreation(data);
            }, function (error) { return console.log(error); });
        }
    };
    TypesComponent.prototype.editTypeClick = function () {
        var _this = this;
        if (this.selectedType != 'activity') {
            if (!this.newType.Code || !this.newType.Name) {
                this.errors.forms.createType.codeRequired = true;
                return;
            }
            if (this.selectedType == 'job') {
                this.jobTypeService.updateJobType(this.newType).subscribe(function (data) {
                    _this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["f" /* JobType */]();
                    _this.finalizeTypeUpdate(data);
                }, function (error) { return console.log(error); });
            }
            else {
                this.taskTypeService.updateTaskType(this.newType).subscribe(function (data) {
                    _this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["e" /* TaskType */]();
                    _this.finalizeTypeUpdate(data);
                }, function (error) { return console.log(error); });
            }
        }
        else {
            if (!this.newType.Name) {
                this.errors.forms.createType.codeRequired = true;
                return;
            }
            this.activityTypeService.updateActivityType(this.newType).subscribe(function (data) {
                _this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["d" /* ActivityType */]();
                _this.finalizeTypeUpdate(data);
            }, function (error) { return console.log(error); });
        }
    };
    TypesComponent.prototype.deleteTypeClick = function () {
        var _this = this;
        switch (this.selectedType) {
            case 'job':
                this.jobTypeService.deleteJobType(this.types[this.editTypeIndex]).subscribe(function (data) {
                    _this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["f" /* JobType */]();
                    _this.finalizeTypeDelete();
                }, function (error) { return console.log(error); });
                break;
            case 'task':
                this.taskTypeService.deleteTaskType(this.types[this.editTypeIndex]).subscribe(function (data) {
                    _this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["e" /* TaskType */]();
                    _this.finalizeTypeDelete();
                }, function (error) { return console.log(error); });
                break;
            case 'activity':
                this.activityTypeService.deleteActivityType(this.types[this.editTypeIndex]).subscribe(function (data) {
                    _this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["d" /* ActivityType */]();
                    _this.finalizeTypeDelete();
                }, function (error) { return console.log(error); });
                break;
        }
    };
    TypesComponent.prototype.finalizeTypeCreation = function (data) {
        this.types.push(data);
        this.toastService.typeCreated(true);
        this.errors.forms.createType.codeRequired = false;
    };
    TypesComponent.prototype.finalizeTypeUpdate = function (data) {
        this.toastService.typeUpdated(true);
        this.errors.forms.createType.codeRequired = false;
        this.editing = false;
    };
    TypesComponent.prototype.finalizeTypeDelete = function () {
        this.types.splice(this.editTypeIndex, 1);
        this.editing = false;
        this.toastService.typeDeleted(true);
    };
    TypesComponent.prototype.getTypes = function () {
        var _this = this;
        switch (this.selectedType) {
            case 'job':
                this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["f" /* JobType */]();
                this.jobTypeService.getJobTypes().subscribe(function (data) {
                    _this.types = data;
                }, function (error) { return console.log(error); });
                break;
            case 'task':
                this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["e" /* TaskType */]();
                this.taskTypeService.getTaskTypes().subscribe(function (data) {
                    _this.types = data;
                }, function (error) { return console.log(error); });
                break;
            case 'activity':
                this.newType = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["d" /* ActivityType */]();
                this.activityTypeService.getActivityTypes().subscribe(function (data) {
                    _this.types = data;
                }, function (error) { return console.log(error); });
                break;
        }
    };
    return TypesComponent;
}());
TypesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-types',
        template: __webpack_require__(494),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["i" /* JobTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["i" /* JobTypeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["j" /* TaskTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["j" /* TaskTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["h" /* ActivityTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["h" /* ActivityTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["b" /* ToastService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* ErrorService */]) === "function" && _f || Object])
], TypesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=types.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_transformer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Site; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Site = (function (_super) {
    __extends(Site, _super);
    function Site() {
        var _this = _super.call(this) || this;
        _this.TypesCodes = [];
        _this.IsActive = true;
        return _this;
    }
    Site.fromObject = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(Site, obj);
    };
    Site.fromJson = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserialize"])(Site, json);
    };
    Site.fromJsonArray = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserializeArray"])(Site, json);
    };
    return Site;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Base */]));

//# sourceMappingURL=site.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_base_service__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__http_base_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subject_service__ = __webpack_require__(297);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__subject_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_service__ = __webpack_require__(295);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__job_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_type_service__ = __webpack_require__(294);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__job_type_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_type_service__ = __webpack_require__(298);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__task_type_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activity_type_service__ = __webpack_require__(291);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__activity_type_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activity_service__ = __webpack_require__(292);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__activity_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_service__ = __webpack_require__(296);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__login_service__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 263;


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(304);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_shared_services__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(tokenService, subjectService, router) {
        this.tokenService = tokenService;
        this.subjectService = subjectService;
        this.router = router;
        this.title = 'rep works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        try {
            var payload = this.tokenService.getTokenPayload();
        }
        catch (e) {
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-root',
        template: __webpack_require__(483)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__dashboard_shared_services__["c" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dashboard_shared_services__["c" /* TokenService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dashboard_shared_services__["e" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dashboard_shared_services__["e" /* SubjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_shared_services_services_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_shared_services_services_module__["a" /* ServicesModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_login_login_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });



var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]
    }
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_model_model_module__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_routing__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_notifications__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_model_model_module__["a" /* ModelModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_routing__["a" /* DashboardRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_subjects_subjects_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_subjects_subject_edit_subject_edit_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_jobs_jobs_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_jobs_tasks_tasks_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_insert_insert_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_types_types_component__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });









var dashboardRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */],
        children: [
            {
                path: '',
                redirectTo: 'subjects',
                pathMatch: 'full'
            },
            {
                path: 'subjects',
                component: __WEBPACK_IMPORTED_MODULE_2__pages_subjects_subjects_component__["a" /* SubjectsComponent */],
            },
            {
                path: 'subjects/:name',
                component: __WEBPACK_IMPORTED_MODULE_3__pages_subjects_subject_edit_subject_edit_component__["a" /* SubjectEditComponent */]
            },
            {
                path: 'jobs',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_jobs_jobs_component__["a" /* JobsComponent */],
            },
            {
                path: 'jobs/:code',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_jobs_tasks_tasks_component__["a" /* TasksComponent */],
            },
            {
                path: 'types',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_types_types_component__["a" /* TypesComponent */],
            },
            {
                path: 'activities',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities_component__["a" /* ActivitiesComponent */],
            },
            {
                path: 'insert',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_insert_insert_component__["a" /* InsertComponent */],
            },
        ]
    },
];
var DashboardRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(dashboardRoutes);
//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_calendar__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatter; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DateFormatter = (function (_super) {
    __extends(DateFormatter, _super);
    function DateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
    };
    DateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date);
    };
    return DateFormatter;
}(__WEBPACK_IMPORTED_MODULE_0_angular_calendar__["a" /* CalendarDateFormatter */]));

//# sourceMappingURL=date-formatter.provider.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subjects_subjects_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subjects_translate_subject_type_pipe__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subjects_subject_edit_subject_edit_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subjects_subject_form_subject_form_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__subjects_subject_form_translate_site_type_pipe__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__jobs_jobs_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__activities_activities_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_calendar__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__activities_calendar_calendar_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__subject_filter_pipe__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__jobs_tasks_tasks_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__insert_insert_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__types_types_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__types_translate_job_element_pipe__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_order_pipe__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ngx_order_pipe__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular_calendar__["b" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19_ngx_order_pipe__["OrderModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__subjects_subjects_component__["a" /* SubjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__subjects_translate_subject_type_pipe__["a" /* TranslateSubjectTypePipe */],
            __WEBPACK_IMPORTED_MODULE_7__subjects_subject_edit_subject_edit_component__["a" /* SubjectEditComponent */],
            __WEBPACK_IMPORTED_MODULE_8__subjects_subject_form_subject_form_component__["a" /* SubjectFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__subjects_subject_form_translate_site_type_pipe__["a" /* TranslateSiteTypePipe */],
            __WEBPACK_IMPORTED_MODULE_10__jobs_jobs_component__["a" /* JobsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__activities_activities_component__["a" /* ActivitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__activities_calendar_calendar_component__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__subject_filter_pipe__["a" /* SubjectFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_15__jobs_tasks_tasks_component__["a" /* TasksComponent */],
            __WEBPACK_IMPORTED_MODULE_16__insert_insert_component__["a" /* InsertComponent */],
            __WEBPACK_IMPORTED_MODULE_17__types_types_component__["a" /* TypesComponent */],
            __WEBPACK_IMPORTED_MODULE_18__types_translate_job_element_pipe__["a" /* TranslateJobElementPipe */]
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SubjectFilterPipe = (function () {
    function SubjectFilterPipe() {
    }
    SubjectFilterPipe.prototype.transform = function (subjects, type) {
        var _this = this;
        if (!subjects)
            return [];
        switch (type) {
            case 'employees': return subjects.filter(function (subject) { return _this.isEmployee(subject); });
            case 'contractors': return subjects.filter(function (subject) { return _this.isContractor(subject); });
            case 'clients': return subjects.filter(function (subject) { return _this.isClient(subject); });
            case 'organizations': return subjects.filter(function (subject) { return _this.isOrganization(subject); });
            case 'contracting_parties': return subjects.filter(function (subject) { return _this.isContractingParty(subject); });
            case 'salaried': return subjects.filter(function (subject) { return _this.isSalaried(subject); });
            case 'employers': return subjects.filter(function (subject) { return _this.isEmployer(subject); });
            default: return subjects;
        }
    };
    SubjectFilterPipe.prototype.isEmployee = function (subject) {
        return subject.Types.indexOf('employee') != -1;
    };
    SubjectFilterPipe.prototype.isContractor = function (subject) {
        return subject.Types.indexOf('contractor') != -1;
    };
    SubjectFilterPipe.prototype.isClient = function (subject) {
        return subject.Types.indexOf('client') != -1;
    };
    SubjectFilterPipe.prototype.isOrganization = function (subject) {
        return subject.Types.indexOf('organization') != -1;
    };
    SubjectFilterPipe.prototype.isContractingParty = function (subject) {
        return subject.Types.indexOf('contracting_party') != -1;
    };
    SubjectFilterPipe.prototype.isSalaried = function (subject) {
        return this.isEmployee(subject) || this.isContractor(subject);
    };
    SubjectFilterPipe.prototype.isEmployer = function (subject) {
        return this.isClient(subject) || this.isOrganization(subject);
    };
    return SubjectFilterPipe;
}());
SubjectFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'subjectFilter',
        pure: false
    })
], SubjectFilterPipe);

//# sourceMappingURL=subject-filter.pipe.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectFormComponent = (function () {
    function SubjectFormComponent(subjectService, toastService) {
        this.subjectService = subjectService;
        this.toastService = toastService;
        this.subjects = [];
        this.SITE_TYPES = ['legal_site', 'logistic_site', 'residence'];
        this.SUBJECT_TYPES = ['employee', 'contractor', 'contracting_party', 'client'];
        this.subjectCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.subjectDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SubjectFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.subject) {
            this.subject = new __WEBPACK_IMPORTED_MODULE_1__shared_model__["h" /* Subject */]();
        }
        this.subjectService.getSubjects().subscribe(function (data) { return _this.subjects = data; }, function (error) { return console.log(error); });
    };
    SubjectFormComponent.prototype.ngOnChanges = function (changes) {
        if (!this.edit) {
            this.manageSubjectTypeChange(changes.selectedType.currentValue, changes.selectedType.previousValue);
        }
    };
    SubjectFormComponent.prototype.employerChanged = function (employerId) {
        this.subject.EmployerId = employerId;
    };
    SubjectFormComponent.prototype.addSiteClick = function () {
        // TODO: check if existing sites are filled before creating a new openedSite
        if (!this.subject.Sites) {
            this.subject.Sites = [];
        }
        this.openedSite =
            this.subject.Sites.push(new __WEBPACK_IMPORTED_MODULE_1__shared_model__["i" /* Site */]()) - 1;
    };
    SubjectFormComponent.prototype.deleteSiteClick = function (index) {
        this.subject.Sites.splice(index, 1);
    };
    SubjectFormComponent.prototype.createSubjectClick = function () {
        var _this = this;
        this.subjectService.createSubject(this.subject).subscribe(function (data) {
            _this.subject = new __WEBPACK_IMPORTED_MODULE_1__shared_model__["h" /* Subject */]();
            _this.manageSubjectTypeChange(_this.selectedType);
            _this.subjectCreated.emit(data);
            _this.toastService.subjectCreated(true);
        }, function (error) { return _this.toastService.subjectCreated(false); });
    };
    SubjectFormComponent.prototype.updateSubjectClick = function () {
        var _this = this;
        this.subjectService.updateSubject(this.subject).subscribe(function (data) { return _this.toastService.subjectUpdated(true); }, function (error) { return _this.toastService.subjectUpdated(false); });
    };
    SubjectFormComponent.prototype.deleteSubjectClick = function () {
        var _this = this;
        this.subjectService.deleteSubject(this.subject).subscribe(function (data) {
            _this.subjectDeleted.emit();
            _this.toastService.subjectDeleted(true);
        }, function (error) { _this.toastService.subjectDeleted(false); console.log(error); });
    };
    SubjectFormComponent.prototype.removeEmptySites = function () {
        for (var i in this.subject.Sites) {
            if (!this.subject.Sites[i].SiteName)
                this.subject.Sites.splice(parseInt(i), 1);
        }
    };
    SubjectFormComponent.prototype.updateTypesArray = function (type, array, event) {
        var index = array.indexOf(type);
        if (event.target.checked && index == -1) {
            array.push(type);
        }
        else if (!event.target.checked && index != -1) {
            array.splice(index, 1);
        }
    };
    SubjectFormComponent.prototype.manageSubjectTypeChange = function (currentType, previousType) {
        if (previousType === void 0) { previousType = null; }
        if (!this.subject) {
            this.subject = new __WEBPACK_IMPORTED_MODULE_1__shared_model__["h" /* Subject */]();
        }
        if (this.subject.Types.indexOf(currentType) == -1) {
            this.subject.Types.push(currentType);
        }
        var previousTypeIndex = this.subject.Types.indexOf(previousType);
        if (previousTypeIndex != -1) {
            this.subject.Types.splice(previousTypeIndex, 1);
        }
    };
    return SubjectFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SubjectFormComponent.prototype, "edit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SubjectFormComponent.prototype, "selectedType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_model__["h" /* Subject */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_model__["h" /* Subject */]) === "function" && _a || Object)
], SubjectFormComponent.prototype, "subject", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], SubjectFormComponent.prototype, "subjectCreated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], SubjectFormComponent.prototype, "subjectDeleted", void 0);
SubjectFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-subject-form',
        template: __webpack_require__(492)
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* SubjectService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* ToastService */]) === "function" && _e || Object])
], SubjectFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=subject-form.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateSiteTypePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TranslateSiteTypePipe = (function () {
    function TranslateSiteTypePipe() {
    }
    TranslateSiteTypePipe.prototype.transform = function (value, args) {
        if (value == 'legal_site')
            return 'Sede Legale';
        else if (value == 'logistic_site')
            return 'Sede Logistica';
        return 'Residenza';
    };
    return TranslateSiteTypePipe;
}());
TranslateSiteTypePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'translateSiteType'
    })
], TranslateSiteTypePipe);

//# sourceMappingURL=translate-site-type.pipe.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateSubjectTypePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TranslateSubjectTypePipe = (function () {
    function TranslateSubjectTypePipe() {
    }
    TranslateSubjectTypePipe.prototype.transform = function (value, args) {
        if (value == 'employee')
            return args == "plural" ? 'dipendenti' : 'dipendente';
        else if (value == 'contractor')
            return args == "plural" ? 'terzisti' : 'terzista';
        else if (value == 'client')
            return args == "plural" ? 'clienti' : 'cliente';
        return args == "plural" ? 'appaltatori' : 'appaltatore';
    };
    return TranslateSubjectTypePipe;
}());
TranslateSubjectTypePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'translateSubjectType'
    })
], TranslateSubjectTypePipe);

//# sourceMappingURL=translate-subject-type.pipe.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateJobElementPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TranslateJobElementPipe = (function () {
    function TranslateJobElementPipe() {
    }
    TranslateJobElementPipe.prototype.transform = function (value, args) {
        if (value == 'job')
            return args == "plural" ? 'commesse' : 'commessa';
        else if (value == 'task')
            return 'task';
        return 'attività';
    };
    return TranslateJobElementPipe;
}());
TranslateJobElementPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'translateJobElement'
    })
], TranslateJobElementPipe);

//# sourceMappingURL=translate-job-element.pipe.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_transformer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityType; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ActivityType = (function (_super) {
    __extends(ActivityType, _super);
    function ActivityType() {
        return _super.call(this) || this;
    }
    ActivityType.fromObject = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(ActivityType, obj);
    };
    ActivityType.fromJson = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserialize"])(ActivityType, json);
    };
    ActivityType.fromJsonArray = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserializeArray"])(ActivityType, json);
    };
    return ActivityType;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Base */]));

//# sourceMappingURL=activity-type.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_transformer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Activity = (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super.call(this) || this;
    }
    Activity.fromObject = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(Activity, obj);
    };
    Activity.fromJson = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserialize"])(Activity, json);
    };
    Activity.fromJsonArray = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserializeArray"])(Activity, json);
    };
    return Activity;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Base */]));

//# sourceMappingURL=activity.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_transformer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobType; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var JobType = (function (_super) {
    __extends(JobType, _super);
    function JobType() {
        return _super.call(this) || this;
    }
    JobType.fromObject = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(JobType, obj);
    };
    JobType.fromJson = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserialize"])(JobType, json);
    };
    JobType.fromJsonArray = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserializeArray"])(JobType, json);
    };
    return JobType;
}(__WEBPACK_IMPORTED_MODULE_0____["b" /* Base */]));

//# sourceMappingURL=job-type.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_transformer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Job = (function (_super) {
    __extends(Job, _super);
    function Job() {
        var _this = _super.call(this) || this;
        _this.IsActive = true;
        _this.Activities = [];
        _this.Tasks = [];
        return _this;
    }
    Job.fromObject = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(Job, obj);
    };
    Job.fromJson = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserialize"])(Job, json);
    };
    Job.fromJsonArray = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserializeArray"])(Job, json);
    };
    return Job;
}(__WEBPACK_IMPORTED_MODULE_0____["b" /* Base */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["Type"])(function () { return __WEBPACK_IMPORTED_MODULE_0____["a" /* Activity */]; }),
    __metadata("design:type", Array)
], Job.prototype, "Activities", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["Type"])(function () { return __WEBPACK_IMPORTED_MODULE_0____["c" /* Task */]; }),
    __metadata("design:type", Array)
], Job.prototype, "Tasks", void 0);
//# sourceMappingURL=job.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelModule = (function () {
    function ModelModule() {
    }
    return ModelModule;
}());
ModelModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        declarations: [],
        exports: []
    })
], ModelModule);

//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_class_transformer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_class_transformer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subject; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.Types = [];
        _this.IsActive = true;
        _this.Sites = [];
        return _this;
    }
    Subject.fromObject = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_class_transformer__["plainToClass"])(Subject, obj);
    };
    Subject.fromJson = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_class_transformer__["deserialize"])(Subject, json);
    };
    Subject.fromJsonArray = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_class_transformer__["deserializeArray"])(Subject, json);
    };
    return Subject;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Base */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_class_transformer__["Type"])(function () { return __WEBPACK_IMPORTED_MODULE_1__site__["a" /* Site */]; }),
    __metadata("design:type", Array)
], Subject.prototype, "Sites", void 0);
//# sourceMappingURL=subject.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_transformer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskType; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TaskType = (function (_super) {
    __extends(TaskType, _super);
    function TaskType() {
        return _super.call(this) || this;
    }
    TaskType.fromObject = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(TaskType, obj);
    };
    TaskType.fromJson = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserialize"])(TaskType, json);
    };
    TaskType.fromJsonArray = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserializeArray"])(TaskType, json);
    };
    return TaskType;
}(__WEBPACK_IMPORTED_MODULE_0____["b" /* Base */]));

//# sourceMappingURL=task-type.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_transformer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Task = (function (_super) {
    __extends(Task, _super);
    function Task() {
        var _this = _super.call(this) || this;
        _this.IsDeleted = false;
        _this.Activities = [];
        _this.Subtasks = [];
        return _this;
    }
    Task.fromObject = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(Task, obj);
    };
    Task.fromJson = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserialize"])(Task, json);
    };
    Task.fromJsonArray = function (json) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["deserializeArray"])(Task, json);
    };
    return Task;
}(__WEBPACK_IMPORTED_MODULE_0____["b" /* Base */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["Type"])(function () { return __WEBPACK_IMPORTED_MODULE_0____["a" /* Activity */]; }),
    __metadata("design:type", Array)
], Task.prototype, "Activities", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["Type"])(function () { return Task; }),
    __metadata("design:type", Array)
], Task.prototype, "Subtasks", void 0);
//# sourceMappingURL=task.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorService = (function () {
    function ErrorService() {
        this.forms = {
            createJob: { codeRequired: false },
            updateJob: { codeRequired: false },
            createTask: { codeRequired: false },
            createActivity: { emptyFields: false },
            createType: { codeRequired: false },
            updateType: { codeRequired: false },
        };
    }
    ErrorService.prototype.reset = function () {
        for (var form in this.forms) {
            for (var error in this.forms[form]) {
                this.forms[form][error] = false;
            }
        }
    };
    return ErrorService;
}());
ErrorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ErrorService);

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityTypeService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActivityTypeService = (function (_super) {
    __extends(ActivityTypeService, _super);
    function ActivityTypeService(http, tokenService) {
        var _this = _super.call(this, tokenService) || this;
        _this.http = http;
        _this.activityTypesUrl = _this.apiUrl + 'activitytypes/';
        return _this;
    }
    ActivityTypeService.prototype.getActivityTypes = function () {
        var _this = this;
        return this.http.get('assets/activitytype.json', this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["d" /* ActivityType */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    ActivityTypeService.prototype.updateActivityType = function (type) {
        var _this = this;
        return this.http.put(this.activityTypesUrl, type, this.options)
            .catch(function (res) { return _this.handleError(res); });
    };
    ActivityTypeService.prototype.createActivityType = function (type) {
        var _this = this;
        return this.http.post(this.activityTypesUrl, type, this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["d" /* ActivityType */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    ActivityTypeService.prototype.deleteActivityType = function (type) {
        var _this = this;
        return this.http.delete(this.activityTypesUrl + type.Id, this.options)
            .map(function (res) { return res; })
            .catch(function (res) { return _this.handleError(res); });
    };
    return ActivityTypeService;
}(__WEBPACK_IMPORTED_MODULE_5__http_base_service__["a" /* HttpBaseService */]));
ActivityTypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */]) === "function" && _b || Object])
], ActivityTypeService);

var _a, _b;
//# sourceMappingURL=activity-type.service.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActivityService = (function (_super) {
    __extends(ActivityService, _super);
    function ActivityService(http, tokenService) {
        var _this = _super.call(this, tokenService) || this;
        _this.http = http;
        _this.activityUrl = _this.apiUrl + 'flatactivities/';
        _this.flatActivityUrl = _this.apiUrl + 'flatactivitiesbymonth/';
        return _this;
    }
    ActivityService.prototype.getActivities = function (employee, month) {
        var _this = this;
        return this.http.get('assets/activities.json', this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["a" /* Activity */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    ActivityService.prototype.updateActivity = function (activity) {
        var _this = this;
        return this.http.put(this.activityUrl, activity, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (res) { return _this.handleError(res); });
    };
    ActivityService.prototype.createActivity = function (activity) {
        var _this = this;
        return this.http.post(this.activityUrl, activity, this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["a" /* Activity */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    ActivityService.prototype.deleteActivity = function (activity) {
        var _this = this;
        return this.http.delete(this.activityUrl + activity.Id, this.options)
            .catch(function (res) { return _this.handleError(res); });
    };
    ActivityService.prototype.getFlatActivitiesByMonth = function (employee, month) {
        var _this = this;
        return this.http.get('assets/activities.json', this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["a" /* Activity */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    return ActivityService;
}(__WEBPACK_IMPORTED_MODULE_5__http_base_service__["a" /* HttpBaseService */]));
ActivityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */]) === "function" && _b || Object])
], ActivityService);

var _a, _b;
//# sourceMappingURL=activity.service.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HttpModule = (function () {
    function HttpModule() {
    }
    return HttpModule;
}());
HttpModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__index__["b" /* HttpBaseService */],
            __WEBPACK_IMPORTED_MODULE_2__index__["c" /* SubjectService */],
            __WEBPACK_IMPORTED_MODULE_2__index__["d" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_2__index__["e" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_2__index__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__index__["f" /* JobTypeService */],
            __WEBPACK_IMPORTED_MODULE_2__index__["g" /* TaskTypeService */],
            __WEBPACK_IMPORTED_MODULE_2__index__["h" /* ActivityTypeService */]
        ]
    })
], HttpModule);

//# sourceMappingURL=http.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobTypeService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JobTypeService = (function (_super) {
    __extends(JobTypeService, _super);
    function JobTypeService(http, tokenService) {
        var _this = _super.call(this, tokenService) || this;
        _this.http = http;
        _this.jobTypesUrl = _this.apiUrl + 'jobtypes/';
        return _this;
    }
    JobTypeService.prototype.getJobTypes = function () {
        var _this = this;
        return this.http.get('assets/jobtypes.json', this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["f" /* JobType */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    JobTypeService.prototype.updateJobType = function (type) {
        var _this = this;
        return this.http.put(this.jobTypesUrl, type, this.options)
            .catch(function (res) { return _this.handleError(res); });
    };
    JobTypeService.prototype.createJobType = function (type) {
        var _this = this;
        return this.http.post(this.jobTypesUrl, type, this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["f" /* JobType */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    JobTypeService.prototype.deleteJobType = function (type) {
        var _this = this;
        return this.http.delete(this.jobTypesUrl + type.Id, this.options)
            .map(function (res) { return res; })
            .catch(function (res) { return _this.handleError(res); });
    };
    return JobTypeService;
}(__WEBPACK_IMPORTED_MODULE_5__http_base_service__["a" /* HttpBaseService */]));
JobTypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */]) === "function" && _b || Object])
], JobTypeService);

var _a, _b;
//# sourceMappingURL=job-type.service.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JobService = (function (_super) {
    __extends(JobService, _super);
    function JobService(http, tokenService) {
        var _this = _super.call(this, tokenService) || this;
        _this.http = http;
        _this.jobsUrl = _this.apiUrl + 'jobs/';
        return _this;
    }
    JobService.prototype.getJobs = function (clientId) {
        var _this = this;
        if (clientId === void 0) { clientId = null; }
        return this.http.get('assets/jobs.json', this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["g" /* Job */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    JobService.prototype.updateJob = function (job) {
        var _this = this;
        return this.http.put(this.jobsUrl, job, this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["g" /* Job */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    JobService.prototype.createJob = function (job) {
        var _this = this;
        return this.http.post(this.jobsUrl, job, this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["g" /* Job */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    JobService.prototype.deleteJob = function (job) {
        var _this = this;
        return this.http.delete(this.jobsUrl + job.Id, this.options)
            .catch(function (res) { return _this.handleError(res); });
    };
    JobService.prototype.printJob = function (job) {
        var _this = this;
        return this.http.post(this.jobsUrl, job, this.options)
            .map(function (res) { return console.log(res); })
            .catch(function (res) { return _this.handleError(res); });
    };
    return JobService;
}(__WEBPACK_IMPORTED_MODULE_5__http_base_service__["a" /* HttpBaseService */]));
JobService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */]) === "function" && _b || Object])
], JobService);

var _a, _b;
//# sourceMappingURL=job.service.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginService = (function () {
    function LoginService(http, router, base, tokenService) {
        this.http = http;
        this.router = router;
        this.base = base;
        this.tokenService = tokenService;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: this.buildLoginHeaders()
        });
        this.tokenUrl = base.apiUrl + 'token';
    }
    LoginService.prototype.login = function (username, password) {
        var body = "username=" + username + "&password=" + password;
        return this.http.post(this.tokenUrl, body, this.options)
            .map(function (res) {
        });
    };
    LoginService.prototype.logout = function () {
        this.tokenService.removeToken();
        this.router.navigate(['login']);
    };
    LoginService.prototype.buildLoginHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        return headers;
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__http_base_service__["a" /* HttpBaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__http_base_service__["a" /* HttpBaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */]) === "function" && _d || Object])
], LoginService);

var _a, _b, _c, _d;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubjectService = (function (_super) {
    __extends(SubjectService, _super);
    function SubjectService(http, tokenService) {
        var _this = _super.call(this, tokenService) || this;
        _this.http = http;
        _this.subjectsUrl = _this.apiUrl + 'subjects/';
        return _this;
    }
    SubjectService.prototype.getSubject = function (id) {
        var _this = this;
        return this.http.get('${this.subjectsUrl}/${id}', this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["h" /* Subject */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    SubjectService.prototype.getSubjects = function () {
        var _this = this;
        return this.http.get('assets/subjects.json', this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["h" /* Subject */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    SubjectService.prototype.updateSubject = function (subject) {
        var _this = this;
        return this.http.put(this.subjectsUrl, subject, this.options)
            .catch(function (res) { return _this.handleError(res); });
    };
    SubjectService.prototype.createSubject = function (subject) {
        var _this = this;
        return this.http.post(this.subjectsUrl, subject, this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["h" /* Subject */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    SubjectService.prototype.deleteSubject = function (subject) {
        var _this = this;
        return this.http.delete(this.subjectsUrl + subject.Id, this.options)
            .map(function (res) { return res; })
            .catch(function (res) { return _this.handleError(res); });
    };
    return SubjectService;
}(__WEBPACK_IMPORTED_MODULE_5__http_base_service__["a" /* HttpBaseService */]));
SubjectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */]) === "function" && _b || Object])
], SubjectService);

var _a, _b;
//# sourceMappingURL=subject.service.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_base_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskTypeService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskTypeService = (function (_super) {
    __extends(TaskTypeService, _super);
    function TaskTypeService(http, tokenService) {
        var _this = _super.call(this, tokenService) || this;
        _this.http = http;
        _this.taskTypesUrl = _this.apiUrl + 'tasktypes/';
        return _this;
    }
    TaskTypeService.prototype.getTaskTypes = function () {
        var _this = this;
        return this.http.get('assets/tasktypes.json', this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["e" /* TaskType */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    TaskTypeService.prototype.updateTaskType = function (type) {
        var _this = this;
        return this.http.put(this.taskTypesUrl, type, this.options)
            .catch(function (res) { return _this.handleError(res); });
    };
    TaskTypeService.prototype.createTaskType = function (type) {
        var _this = this;
        return this.http.post(this.taskTypesUrl, type, this.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_4__model__["e" /* TaskType */].fromObject(res.json()); })
            .catch(function (res) { return _this.handleError(res); });
    };
    TaskTypeService.prototype.deleteTaskType = function (type) {
        var _this = this;
        return this.http.delete(this.taskTypesUrl + type.Id, this.options)
            .map(function (res) { return res; })
            .catch(function (res) { return _this.handleError(res); });
    };
    return TaskTypeService;
}(__WEBPACK_IMPORTED_MODULE_5__http_base_service__["a" /* HttpBaseService */]));
TaskTypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__index__["c" /* TokenService */]) === "function" && _b || Object])
], TaskTypeService);

var _a, _b;
//# sourceMappingURL=task-type.service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http_module__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__http_http_module__["a" /* HttpModule */]
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__index__["d" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_3__index__["b" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__index__["c" /* TokenService */]
        ]
    })
], ServicesModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpBaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpBaseService = (function () {
    function HttpBaseService(tokenService) {
        var _this = this;
        this.tokenService = tokenService;
        //public apiUrl: string = 'http://dielle002:53434/reports/api/';
        this.apiUrl = 'http://localhost:5000/api/';
        this.setToken();
        this.buildRequestOptions();
        this.tokenService.tokenObservable.subscribe(function (token) {
            if (!!token) {
                _this.token = token;
                _this.buildRequestOptions();
            }
        });
    }
    HttpBaseService.prototype.setToken = function () {
        try {
            this.token = this.tokenService.retrieveToken();
        }
        catch (e) { }
    };
    HttpBaseService.prototype.handleError = function (error) {
        try {
            this.tokenService.tokenExpired();
        }
        catch (e) {
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    HttpBaseService.prototype.buildRequestOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'Bearer ' + this.token);
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: headers
        });
    };
    return HttpBaseService;
}());
HttpBaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__index__["c" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__index__["c" /* TokenService */]) === "function" && _a || Object])
], HttpBaseService);

var _a;
//# sourceMappingURL=http-base.service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(notificationsService) {
        this.notificationsService = notificationsService;
        this.options = {
            timeOut: 3000,
            showProgressBar: false,
            lastOnBottom: false
        };
        this.successTitle = 'Successo!';
        this.errorTitle = 'Errore!';
    }
    ToastService.prototype.subjectCreated = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'La creazione è andata a buon fine.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la creazione del soggetto.', this.options);
        }
    };
    ToastService.prototype.subjectUpdated = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'Il soggetto è stato modificato correttamente.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la modifica del soggetto.', this.options);
        }
    };
    ToastService.prototype.subjectDeleted = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'Il soggetto è stato rimosso correttamente.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la rimozione del soggetto.', this.options);
        }
    };
    ToastService.prototype.jobCreated = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'La creazione della commessa è andata a buon fine.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la creazione della commessa.', this.options);
        }
    };
    ToastService.prototype.jobDeleted = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'La commessa è stata rimossa correttamente.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la rimozione della commessa.', this.options);
        }
    };
    ToastService.prototype.jobUpdated = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'La commessa è stata modificata correttamente.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la modifica della commessa.', this.options);
        }
    };
    ToastService.prototype.taskCreated = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'La creazione del task è andata a buon fine.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la creazione del task.', this.options);
        }
    };
    ToastService.prototype.taskDeleted = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'Il task è stato rimosso correttamente.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la rimozione del task.', this.options);
        }
    };
    ToastService.prototype.taskUpdated = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'Il task è stato modificato correttamente.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la modifica del task.', this.options);
        }
    };
    ToastService.prototype.activityCreated = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'La creazione dell\'attività è andata a buon fine.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la creazione dell\'attività.', this.options);
        }
    };
    ToastService.prototype.activityDeleted = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'L\'attività è stata rimossa correttamente.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la rimozione dell\'attività.', this.options);
        }
    };
    ToastService.prototype.loginSuccess = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'L\'accesso è stato eseguito correttamente correttamente.', this.options);
        }
        else {
            this.notificationsService.error('Accesso fallito!', 'Riprova o contatta un amministratore.', this.options);
        }
    };
    ToastService.prototype.typeDeleted = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'Il tipo è stato rimosso correttamente.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la rimozione del tipo.', this.options);
        }
    };
    ToastService.prototype.typeUpdated = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'Il tipo è stato modificato correttamente.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la modifica del tipo.', this.options);
        }
    };
    ToastService.prototype.typeCreated = function (success) {
        if (success) {
            this.notificationsService.success(this.successTitle, 'La creazione del tipo è andata a buon fine.', this.options);
        }
        else {
            this.notificationsService.error(this.errorTitle, 'Un errore ha interrotto la creazione del tipo.', this.options);
        }
    };
    return ToastService;
}());
ToastService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["a" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["a" /* NotificationsService */]) === "function" && _a || Object])
], ToastService);

var _a;
//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = (function () {
    function TokenService() {
        this.tokenKey = 'rep_token';
        this.tokenObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    TokenService.prototype.storeToken = function (content) {
        localStorage.setItem(this.tokenKey, JSON.stringify(content));
        this.tokenObservable.next(content.access_token);
    };
    TokenService.prototype.retrieveToken = function () {
        var storedToken = localStorage.getItem(this.tokenKey);
        if (!storedToken) {
            throw new Error('token not found');
        }
        return JSON.parse(storedToken).access_token;
    };
    TokenService.prototype.removeToken = function () {
        localStorage.clear();
    };
    TokenService.prototype.getTokenPayload = function () {
        var token = this.retrieveToken();
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    ;
    TokenService.prototype.tokenExpired = function () {
        var payload = this.getTokenPayload();
        if (payload.exp < Date.now() / 1000) {
            this.removeToken();
            throw Error('token expired');
        }
    };
    return TokenService;
}());
TokenService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TokenService);

//# sourceMappingURL=token.service.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_toggle_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__sidebar_toggle_service__["a" /* SidebarToggleService */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_toggle_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(toggleService, loginService) {
        this.toggleService = toggleService;
        this.loginService = loginService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toggleService.isToggled().subscribe(function (toggled) {
            _this.toggled = toggled;
        });
    };
    SidebarComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-sidebar',
        template: __webpack_require__(495)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidebar_toggle_service__["a" /* SidebarToggleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidebar_toggle_service__["a" /* SidebarToggleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* LoginService */]) === "function" && _b || Object])
], SidebarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_class_transformer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_class_transformer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });

var Base = (function () {
    function Base() {
    }
    Base.prototype.toJson = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_class_transformer__["serialize"])(this);
    };
    Base.prototype.toObject = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_class_transformer__["classToPlain"])(this);
    };
    Base.prototype.clone = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_class_transformer__["classToClass"])(this, { 'ignoreDecorators': true });
    };
    return Base;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<rep-sidebar></rep-sidebar>\n\n<div class=\"main-section\" [ngClass]=\"{'toggle-in': !!toggled, 'toggle-out': (!toggled && toggled!=null)}\">\n\n  <div class=\"title-bar hide-for-large sidebar-toggle\">\n    <div class=\"title-bar-left\">\n      <button class=\"menu-icon\" type=\"button\" (click)=\"toggle()\"></button>\n    </div>\n  </div>\n\n  <div class=\"main-section-content off-canvas-content\" (click)=\"toggled ? toggle(): 0\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"medium-6 medium-centered large-4 large-centered columns\">\n\n    <form class=\"log-in-form\">\n      <div class=\"row column\">\n        <h4 class=\"text-center\">Login</h4>\n        <label>Nome utente\n          <input type=\"text\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"username\" (keyup.enter)=\"login()\">\n        </label>\n        <label>Password\n          <input type=\"{{inputType}}\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\" (keyup.enter)=\"login()\">\n        </label>\n        <input id=\"show-password\" type=\"checkbox\" (click)=\"toggleInputType()\">\n        <label for=\"show-password\">Mostra password</label>\n        <p><a type=\"submit\" class=\"button primary expanded\" (click)=\"login()\">Accedi</a></p>\n      </div>\n    </form>\n\n  </div>\n</div>\n<simple-notifications [options]=\"{position: ['top', 'right']}\"></simple-notifications>\n"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "<div class=\"row large-6\">\n  <label>Soggetto\n    <select [ngModel]=\"selectedEmployee\" (ngModelChange)=\"employeeChanged($event)\">\n        <option *ngFor=\"let subject of subjects | subjectFilter:'salaried'\" [ngValue]=\"subject\">{{subject.FirstName}}</option>\n    </select>\n  </label>\n</div>\n<br>\n<div class=\"row large-10 column\">\n  <rep-calendar (dayChanged)=\"dayChanged($event)\" (monthChanged)=\"monthChanged($event)\"></rep-calendar>\n</div>\n<br>\n<div class=\"row\" *ngIf=\"this.selectedDay\">\n  <div class=\"large-5 large-offset-1 column\">\n    <h4 class=\"row\">Attività del {{selectedDay | date:'d/MM'}}</h4>\n    <ul class=\"row main-list\">\n      <p *ngIf=\"emptyActivities()\">Nessuna attività per questo giorno.</p>\n      <li *ngFor=\"let activity of activities; let i = index\">\n        <div *ngIf=\"isSelectedDay(activity.Date)\">\n          <a class=\"sub-item-delete\" (click)=\"deleteActivityClick(activity, i)\"><i class=\"fi-x\"></i></a>\n          <a>\n            {{activity.Description}} - {{activity.WorkedHours}}h\n            <span class=\"item-description\">\n              {{activity.JobCode}} - {{activity.JobDescription}}\n              <span *ngIf=\"activity.TaskCode\">\n                >\n                {{activity.TaskCode}} - {{activity.TaskDescription}}\n              </span>\n            </span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"large-4 large-offset-1 column\">\n    <form ngNoForm>\n      <h4 class=\"row\">Aggiungi Attività</h4>\n      <div class=\"row\">\n        <label>Cliente\n          <select [ngModel]=\"selectedClient\" (ngModelChange)=\"clientChanged($event)\">\n              <option *ngFor=\"let subject of subjects | subjectFilter:'clients'\" [ngValue]=\"subject\">{{subject.BusinessName}}</option>\n          </select>\n        </label>\n        <label>Commessa\n          <select [(ngModel)]=\"this.selectedJob\" (ngModelChange)=\"jobChanged($event)\">\n              <option *ngFor=\"let job of jobs\" [ngValue]=\"job\">{{job.Code}} - {{job.Description}}</option>\n          </select>\n        </label>\n        <label *ngIf=\"selectedJob?.Tasks.length\">Task\n          <select [(ngModel)]=\"selectedTask\" (ngModelChange)=\"taskChanged($event)\">\n            <option value=\"undefined\" selected>Nessuno</option>\n              <option *ngFor=\"let task of selectedJob.Tasks\" [ngValue]=\"task\">{{task.Code}} - {{task.Description}}</option>\n          </select>\n        </label>\n        <label *ngIf=\"selectedTask?.Subtasks?.length\">Sotto task\n          <select [(ngModel)]=\"selectedSubtask\" (ngModelChange)=\"subtaskChanged($event)\">\n              <option value=\"undefined\" selected>Nessuno</option>\n              <option *ngFor=\"let subtask of selectedTask.Subtasks\" [ngValue]=\"subtask\">{{subtask.Code}} - {{subtask.Description}}</option>\n          </select>\n        </label>\n        <label>Tipo\n          <select [(ngModel)]=\"newActivity.ActivityType\" name=\"type\">\n              <option *ngFor=\"let type of activityTypes\" [ngValue]=\"type.Id\">{{type.Name}}</option>\n          </select>\n        </label>\n        <label>Descrizione\n          <input type=\"text\" name=\"code\" placeholder=\"Es. Bordo macchina\" [(ngModel)]=\"newActivity.Description\">\n        </label>\n        <label>Ore\n          <input type=\"text\" name=\"description\" placeholder=\"Es. 8\" [(ngModel)]=\"newActivity.WorkedHours\">\n        </label>\n      </div>\n      <div class=\"row submit-button\">\n        <p>\n          <a type=\"submit\" class=\"button primary\" (click)=\"createActivityClick()\">\n            Crea attività\n          </a>\n        </p>\n        <div class=\"callout alert\" *ngIf=\"(!newActivity.Description || !newActivity.Code) && errors.forms.createActivity.emptyFields\">\n          <p>Uno o più campi non inseriti.</p>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"large-1\"></div>\n  <simple-notifications [options]=\"{position: ['top', 'right']}\"></simple-notifications>\n"

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-header-wrapper row\">\n  <div class=\"calendar-header\">\n    <a class=\"month-arrow\" (click)=\"decrementMonth()\"><img src=\"./assets/icons/back_arrow_2.png\" alt=\"\"></a>\n    <h5>{{ viewDate | calendarDate:(view + 'ViewTitle'):'it' }}</h5>\n    <a class=\"month-arrow reverse\" (click)=\"incrementMonth()\"><img src=\"./assets/icons/back_arrow_2.png\" alt=\"\"></a>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"text-center\">\n    Loading events...\n  </div>\n</ng-template>\n\n<div class=\"row\">\n  <mwl-calendar-month-view\n    [viewDate]=\"viewDate\"\n    [locale]=\"locale\"\n    [weekStartsOn]=\"weekStartsOn\"\n    [dayModifier]=\"addBadgeTotal\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (dayClicked)=\"dayClicked($event.day)\">\n  </mwl-calendar-month-view>\n</div>\n"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "<div class=\"row large-6\">\n  <label>Soggetto\n    <select [(ngModel)]=\"selectedEmployee\" (ngModelChange)=\"getActivities($event)\">\n        <option *ngFor=\"let subject of subjects | subjectFilter:'salaried'\" [ngValue]=\"subject\">{{subject.FirstName}}</option>\n    </select>\n  </label>\n</div>\n\n\n<div class=\"row adjusted-top\">\n  <div class=\"medium-3 columns\">\n    <label>Data\n      <input type=\"date\" #firstInput tabindex=\"1\" placeholder=\"Es. 040717\" [ngModel]=\"dateTyped\" (ngModelChange)=\"dateChanged($event)\" (keyup.enter)=\"createActivityClick()\">\n    </label>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"medium-3 columns\">\n    <label>Cliente\n        <select tabindex=\"2\" [(ngModel)]=\"selectedClient\" (ngModelChange)=\"clientChanged($event)\" (keyup.enter)=\"createActivityClick()\">\n            <option *ngFor=\"let subject of subjects | subjectFilter:'employers'\" [ngValue]=\"subject\">{{subject.BusinessName}}</option>\n        </select>\n      </label>\n  </div>\n  <div class=\"medium-3 columns\">\n    <label>Commessa\n        <select tabindex=\"3\" [(ngModel)]=\"selectedJob\" (ngModelChange)=\"jobChanged($event)\" (keyup.enter)=\"createActivityClick()\">\n            <option *ngFor=\"let job of jobs\" [ngValue]=\"job\">{{job.Code}} - {{job.Description}}</option>\n        </select>\n      </label>\n  </div>\n  <div class=\"medium-3 columns\">\n    <label *ngIf=\"selectedJob?.Tasks.length\">Task\n        <select tabindex=\"4\" [(ngModel)]=\"selectedTask\" (ngModelChange)=\"taskChanged($event)\" (keyup.enter)=\"createActivityClick()\">\n          <option value=\"undefined\" selected>Nessuno</option>\n            <option *ngFor=\"let task of selectedJob.Tasks\" [ngValue]=\"task\">{{task.Code}} - {{task.Description}}</option>\n        </select>\n      </label>\n  </div>\n  <div class=\"medium-3 columns\">\n    <label *ngIf=\"selectedTask?.Subtasks?.length\">Sotto task\n        <select tabindex=\"4\" [(ngModel)]=\"selectedSubtask\" (ngModelChange)=\"subtaskChanged($event)\" (keyup.enter)=\"createActivityClick()\">\n            <option value=\"undefined\" selected>Nessuno</option>\n            <option *ngFor=\"let subtask of selectedTask.Subtasks\" [ngValue]=\"subtask\">{{subtask.Code}} - {{subtask.Description}}</option>\n        </select>\n      </label>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"medium-3 columns\">\n    <label>Attività\n        <select tabindex=\"5\" [(ngModel)]=\"selectedActivityType\" (ngModelChange)=\"activityTypeChanged($event)\" (keyup.enter)=\"createActivityClick()\">\n            <option *ngFor=\"let activityType of activityTypes\" [ngValue]=\"activityType\">{{activityType.Name}}</option>\n        </select>\n      </label>\n  </div>\n  <div class=\"medium-3 columns\">\n    <label>Ore\n      <input tabindex=\"6\" type=\"text\" placeholder=\"Es. 8\" [(ngModel)]=\"newActivity.WorkedHours\" (keyup.enter)=\"createActivityClick()\">\n    </label>\n  </div>\n  <div class=\"submit-button insert medium-6 columns\">\n    <p>\n      <a tabindex=\"7\" type=\"submit\" class=\"button primary\" (click)=\"createActivityClick()\" (keyup.enter)=\"createActivityClick()\" (keydown.Tab)=\"createActivityTab($event)\">\n        Crea attività\n      </a>\n    </p>\n  </div>\n  <div class=\"medium-12 columns\">\n    <div class=\"callout alert\" *ngIf=\"(!newActivity.ActivityType || !newActivity.Code) && errors.forms.createActivity.emptyFields\">\n      <p>Uno o più campi non inseriti.</p>\n    </div>\n  </div>\n</div>\n\n<br>\n<br>\n\n<div class=\"row medium-9 column\">\n  <h4>Lista attività</h4>\n  <p *ngIf=\"!this.activities.length\">Nessuna attività presente.</p>\n  <div *ngIf=\"this.activities.length\" class=\"activities-container\">\n    <div class=\"row\">\n      <h5 class=\"large-2 column\">Data</h5>\n      <h5 class=\"large-6 column\">Commessa/Task</h5>\n      <h5 class=\"large-4 column\">Attività</h5>\n    </div>\n\n    <ul class=\"main-list activities\">\n      <li *ngFor=\"let activity of activities | orderBy : 'Date' : true\" class=\"row\">\n        <span class=\"large-2 column date\">{{activity.Date | date: 'dd/MM/yyyy'}}</span>\n        <span class=\"large-6 column job\">\n          {{activity.JobCode}} {{activity.JobDescription}}\n          <span class=\"task\" *ngIf=\"activity.TaskCode\">\n            - {{activity.TaskCode}} {{activity.TaskDescription}}\n          </span>\n        </span>\n        <span class=\"large-4 column activity\">{{activity.Description}} -\n          <span class=\"hours\">{{activity.WorkedHours}}h</span>\n        </span>\n      </li>\n    </ul>\n  </div>\n\n</div>\n\n\n<simple-notifications [options]=\"{position: ['top', 'right']}\"></simple-notifications>\n"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "<div class=\"row large-6\">\n  <label>Cliente\n    <select [ngModel]=\"selectedClient\" (ngModelChange)=\"clientChanged($event)\">\n        <option *ngFor=\"let subject of subjects | subjectFilter:'clients'\" [ngValue]=\"subject\">{{subject.BusinessName}}</option>\n    </select>\n  </label>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"large-5 large-offset-1 column\">\n    <h4 class=\"row\">Commesse {{selectedClient.BusinessName}}</h4>\n    <ul class=\"row main-list\">\n      <li *ngFor=\"let job of jobs\">\n        <div *ngIf=\"job.ClientId == selectedClient.Id\" (click)=\"return\">\n          <a (click)=\"goToEditJob(job)\">{{job.Code}} - {{job.Description}}</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"large-4 large-offset-1 column\">\n    <form ngNoForm>\n      <h4 class=\"row\">Aggiungi Commessa</h4>\n      <div class=\"row\">\n        <label>Codice\n          <input type=\"text\" placeholder=\"Es. F1483\" [(ngModel)]=\"newJob.Code\">\n        </label>\n        <label>Descrizione\n          <input type=\"text\" placeholder=\"Es. Linea produzione corn flakes\" [(ngModel)]=\"newJob.Description\">\n        </label>\n        <label>Tipo\n          <select [(ngModel)]=\"newJob.TypeId\">\n              <option *ngFor=\"let type of jobTypes\" [ngValue]=\"type.Id\">{{type.Code}} - {{type.Name}}</option>\n          </select>\n        </label>\n        <label>Appaltatore\n          <select [(ngModel)]=\"newJob.ContractingPartyId\">\n              <option *ngFor=\"let subject of subjects | subjectFilter:'contracting_parties'\" [ngValue]=\"subject.Id\">{{subject.BusinessName}}</option>\n          </select>\n        </label>\n      </div>\n      <div class=\"row submit-button\">\n        <p>\n          <a type=\"submit\" class=\"button primary\" (click)=\"createJobClick()\">\n            Crea commessa\n          </a>\n        </p>\n        <div class=\"callout alert\" *ngIf=\"errors.forms.createJob.codeRequired && !newJob.Code\">\n          <p>Codice commessa non inserito.</p>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"large-1\"></div>\n</div>\n"

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<div>\n  <a class=\"button-back\" (click)=\"goBack()\"><img src=\"./assets/icons/back_arrow.png\" alt=\"\"></a>\n\n  <div class=\"row\">\n    <div class=\"large-5 large-offset-1 column\">\n      <div class=\"row\">\n        <h4>Commessa {{job.Code}}</h4>\n      </div>\n      <form ngNoForm>\n        <div class=\"row\">\n          <label>Codice\n            <input type=\"text\" placeholder=\"Es. F1483\" [(ngModel)]=\"job.Code\" (ngModelChange)=\"errors.forms.updateJob.codeRequired=false\">\n          </label>\n          <label>Descrizione\n            <input type=\"text\" placeholder=\"Es. Linea produzione corn flakes\" [(ngModel)]=\"job.Description\">\n          </label>\n          <label>Tipo\n            <select [(ngModel)]=\"job.TypeId\">\n                <option *ngFor=\"let type of jobTypes\" [ngValue]=\"type.Id\">{{type.Code}} - {{type.Name}}</option>\n            </select>\n          </label>\n          <label>Appaltatore\n            <select [(ngModel)]=\"job.ContractingPartyId\">\n                <option *ngFor=\"let subject of subjects | subjectFilter:'contracting_parties'\" [ngValue]=\"subject.Id\">{{subject.BusinessName}}</option>\n            </select>\n          </label>\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"job.IsActive\">\n            Attiva\n          </label>\n        </div>\n        <div class=\"row submit-button\">\n          <p>\n            <a type=\"submit\" class=\"button primary\" (click)=\"updateJobClick()\">\n              Applica modifiche\n            </a>\n            <a type=\"submit\" class=\"button delete\" (click)=\"deleteJobClick()\">\n              Rimuovi commessa\n            </a>\n          </p>\n          <div class=\"callout alert\" *ngIf=\"errors.forms.updateJob.codeRequired && !job.Code\">\n            <p>Codice commessa non inserito.</p>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"large-4 large-offset-1 column\">\n      <form ngNoForm>\n        <h4 class=\"row\">Aggiungi Task</h4>\n        <div class=\"row\">\n          <label>Codice\n            <input type=\"text\" placeholder=\"Es. FC\" [(ngModel)]=\"newTask.Code\" (ngModelChange)=\"showErrors=false\">\n          </label>\n          <label>Descrizione\n            <input type=\"text\" placeholder=\"Es. Fioccatore\" [(ngModel)]=\"newTask.Description\">\n          </label>\n          <label>Tipo\n            <select [(ngModel)]=\"newTask.TypeId\">\n                <option *ngFor=\"let type of taskTypes\" [ngValue]=\"type.Id\">{{type.Code}} - {{type.Name}}</option>\n            </select>\n          </label>\n        </div>\n        <div class=\"row submit-button\">\n          <p>\n            <a type=\"submit\" class=\"button primary\" (click)=\"createTaskClick()\">\n              Aggiungi task\n            </a>\n          </p>\n          <div class=\"callout alert\" *ngIf=\"errors.forms.createTask.codeRequired && !newTask.Code\">\n            <p>Codice task non inserito.</p>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"large-1 column\"></div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"large-5 large-offset-1 column\">\n      <h4 class=\"row\">Lista Task</h4>\n      <p class=\"subheader row\" *ngIf=\"!job.Tasks.length\">Nessun task inserito in questa commessa</p>\n      <div class=\"row\" *ngFor=\"let task of job.Tasks; let i = index\">\n        <div class=\"sub-item-compact\" *ngIf=\"!task.IsDeleted\">\n          <a class=\"sub-item-delete\" (click)=\"deleteTaskClick(task)\"><i class=\"fi-x\"></i></a>\n          <a (click)=\"editTaskIndex = i; editTaskOpen = true\">{{task.Code}} - {{task.Description}}</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"large-4 large-offset-1 column\">\n      <form ngNoForm *ngIf=\"editTaskOpen\">\n        <h4 class=\"row\">Modifica Task</h4>\n        <div class=\"row\">\n          <label>Codice\n            <input type=\"text\" placeholder=\"Es. FC\" [(ngModel)]=\"job.Tasks[editTaskIndex].Code\" (ngModelChange)=\"showErrors=false\">\n          </label>\n          <label>Descrizione\n            <input type=\"text\" placeholder=\"Es. Fioccatore\" [(ngModel)]=\"job.Tasks[editTaskIndex].Description\">\n          </label>\n          <label>Tipo\n            <select [(ngModel)]=\"job.Tasks[editTaskIndex].TypeId\">\n                <option *ngFor=\"let type of taskTypes\" [ngValue]=\"type.Id\">{{type.Code}} - {{type.Name}}</option>\n            </select>\n          </label>\n        </div>\n        <div class=\"row\">\n          <h5>Sotto Task</h5>\n          <div *ngFor=\"let subtask of job.Tasks[editTaskIndex].Subtasks; let i = index\">\n            <div *ngIf=\"!subtask.IsDeleted\">\n              <div *ngIf=\"editSubtaskIndex != i\" class=\"sub-item-compact\">\n                <a class=\"sub-item-delete\" (click)=\"deleteSubtaskClick(subtask)\"><i class=\"fi-x\"></i></a>\n                <a (click)=\"editSubtaskIndex = i\">\n                {{subtask.Code}} - {{subtask.Description}}\n              </a>\n              </div>\n              <div *ngIf=\"editSubtaskIndex == i\" clas=\"form-site\">\n                <label>Codice\n                <input type=\"text\" placeholder=\"Es. FC\" [(ngModel)]=\"subtask.Code\" (ngModelChange)=\"showErrors=false\">\n              </label>\n                <label>Descrizione\n                <input type=\"text\" placeholder=\"Es. Fioccatore\" [(ngModel)]=\"subtask.Description\">\n              </label>\n                <label>Tipo\n                <select [(ngModel)]=\"subtask.TypeId\">\n                    <option *ngFor=\"let type of taskTypes\" [ngValue]=\"type.Id\">{{type.Code}} - {{type.Name}}</option>\n                </select>\n              </label>\n              </div>\n            </div>\n          </div>\n          <a class=\"site-add\" (click)=\"addSubtaskClick()\"><i class=\"fi-plus\"></i> Aggiungi sotto task</a>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"large-1 column\"></div>\n  </div>\n\n  <simple-notifications [options]=\"{position: ['top', 'right']}\"></simple-notifications>\n</div>\n"

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<div class=\"large-6 large-offset-1 column\">\n  <a class=\"button-back\" (click)=\"goBack()\"><img src=\"./assets/icons/back_arrow.png\" alt=\"\"></a>\n  <rep-subject-form [edit]=\"true\"\n    [subject]=\"this.subject\"\n    [selectedType]=\"this.subject.Types[0]\"\n    (subjectDeleted)=\"goBack()\">\n  </rep-subject-form>\n</div>\n"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<form>\n  <h4 class=\"row\">{{edit ? 'Modifica' : 'Aggiungi'}} {{selectedType | translateSubjectType}}</h4>\n  <div class=\"row\">\n    <label>Nome\n      <input type=\"text\" name=\"firstname\" placeholder=\"Es. Mario\" [(ngModel)]=\"subject.FirstName\">\n    </label>\n    <label>Cognome\n      <input type=\"text\" name=\"lastname\" placeholder=\"Es. Rossi\" [(ngModel)]=\"subject.LastName\">\n    </label>\n    <label>Ragione Sociale\n      <input type=\"text\" name=\"businessname\" placeholder=\"Es. Mario Rossi Inc\" [(ngModel)]=\"subject.BusinessName\">\n    </label>\n    <fieldset class=\"checkbox-list-fieldset\">\n      <label>Categoria</label>\n      <div class=\"checkbox-list-item\" *ngFor=\"let type of SUBJECT_TYPES\">\n        <input id=\"{{type}}\" type=\"checkbox\" [checked]=\"subject.Types.indexOf(type) >= 0\" [disabled]=\"type==selectedType && !edit\" (change)=\"updateTypesArray(type, subject.Types, $event)\">\n        <label for=\"{{type}}\">{{type | translateSubjectType}}</label>\n      </div>\n    </fieldset>\n    <label>Codice Fiscale\n      <input type=\"text\" name=\"tax\" placeholder=\"Es. BBZJDC78B54Z135S\" [(ngModel)]=\"subject.TaxCode\">\n    </label>\n    <label>Partita IVA\n      <input type=\"text\" name=\"vat\" placeholder=\"Es. 02474770282\" [(ngModel)]=\"subject.VATNumber\">\n    </label>\n    <label>Quota Oraria\n      <input type=\"text\" name=\"rate\" placeholder=\"Es. 20.0\" [(ngModel)]=\"subject.HourlyRate\">\n    </label>\n    <label>Datore di lavoro\n      <select [ngModel]=\"subject.EmployerId\" name=\"employer\" (ngModelChange)=\"employerChanged($event)\">\n          <option *ngFor=\"let subject of subjects | subjectFilter:'employer'\" [ngValue]=\"subject.Id\">{{subject.BusinessName}}</option>\n      </select>\n    </label>\n    <label>\n      <input type=\"checkbox\" name=\"isactive\" [(ngModel)]=\"subject.IsActive\">\n      Attivo\n    </label>\n    <h5>Sedi</h5>\n    <div *ngFor=\"let site of subject.Sites; let i = index\">\n      <div *ngIf=\"openedSite!=i\" class=\"sub-item-compact\">\n        <a class=\"sub-item-delete\" (click)=\"deleteSiteClick(i)\"><i class=\"fi-x\"></i></a>\n        <a (click)=\"openedSite = i\">{{subject.Sites[i].SiteName}}</a>\n      </div>\n      <div *ngIf=\"openedSite==i\" clas=\"form-site\">\n        <label>Nome\n          <input type=\"text\" name=\"sitename\" placeholder=\"Es. Industry Castelfranco Magazzino\" [(ngModel)]=\"site.SiteName\">\n        </label>\n        <fieldset class=\"checkbox-list-fieldset\">\n          <label>Tipologia sede</label>\n          <div class=\"checkbox-list-item\" *ngFor=\"let type of SITE_TYPES\">\n            <input id=\"{{type}}\" type=\"checkbox\" [checked]=\"site.TypesCodes.indexOf(type) >= 0\" (change)=\"updateTypesArray(type, site.TypesCodes, $event)\">\n            <label for=\"{{type}}\">{{type | translateSiteType}}</label>\n          </div>\n        </fieldset>\n        <label>Indirizzo\n          <input type=\"text\" name=\"address\" placeholder=\"Es. Via Galieo Galilei\" [(ngModel)]=\"site.Address\">\n        </label>\n        <label>Numero Civico\n          <input type=\"text\" name=\"number\" placeholder=\"Es. 1\" [(ngModel)]=\"site.Number\">\n        </label>\n        <label>Città\n          <input type=\"text\" name=\"city\" placeholder=\"Es. Galliera Veneta\" [(ngModel)]=\"site.City\">\n        </label>\n        <label>Codice Postale\n          <input type=\"text\" name=\"zip\" placeholder=\"Es. 35015\" [(ngModel)]=\"site.ZipCode\">\n        </label>\n        <label>Provincia\n          <input type=\"text\" name=\"province\" placeholder=\"Es. Padova\" [(ngModel)]=\"site.Province\">\n        </label>\n        <label>Sigla paese\n          <input type=\"text\" name=\"country\" placeholder=\"Es. IT\" [(ngModel)]=\"site.CountryId\">\n        </label>\n      </div>\n    </div>\n    <a class=\"site-add\" (click)=\"addSiteClick()\"><i class=\"fi-plus\"></i> Aggiungi sede</a>\n  </div>\n  <div class=\"row submit-button\">\n    <p>\n      <a type=\"submit\" class=\"button primary\" *ngIf=\"!edit\" (click)=\"createSubjectClick()\">\n        Crea {{selectedType | translateSubjectType}}\n      </a>\n      <a type=\"submit\" class=\"button primary\" *ngIf=\"edit\" (click)=\"updateSubjectClick()\">\n        Applica modifiche\n      </a>\n      <a type=\"submit\" class=\"button delete\" *ngIf=\"edit\" (click)=\"deleteSubjectClick()\">\n        Rimuovi {{selectedType | translateSubjectType}}\n      </a>\n    </p>\n  </div>\n</form>\n<simple-notifications [options]=\"{position: ['top', 'right']}\"></simple-notifications>\n"

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = "<div class=\"row subjects\">\n  <div class=\"large-6 large-offset-3\">\n    <div class=\"button-group expanded\">\n      <a class=\"button primary\" (click)=\"selectedType='employee'\" [ngClass]=\"{'inverse': selectedType!='employee'}\">\n        Dipendenti\n      </a>\n      <a class=\"button primary\" (click)=\"selectedType='client'\" [ngClass]=\"{'inverse': selectedType!='client'}\">\n        Clienti\n      </a>\n      <a class=\"button primary\" (click)=\"selectedType='contractor'\" [ngClass]=\"{'inverse': selectedType!='contractor'}\">\n        Terzisti\n      </a>\n      <a class=\"button primary\" (click)=\"selectedType='contracting_party'\" [ngClass]=\"{'inverse': selectedType!='contracting_party'}\">\n        Appaltatori\n      </a>\n    </div>\n  </div>\n  <br>\n\n  <div class=\"large-5 large-offset-1 column\">\n    <h4 class=\"row\">Lista {{selectedType | translateSubjectType:'plural'}}</h4>\n    <ul class=\"row main-list\">\n      <li *ngFor=\"let subject of subjects\">\n        <div *ngIf=\"subject.Types.includes(selectedType)\" (click)=\"goToEditSubject(subject)\">\n          <a *ngIf=\"subject.Types.includes('employee')\">\n            {{subject.FirstName}} {{subject.LastName}}\n          </a>\n          <a *ngIf=\"!subject.Types.includes('employee')\">\n            {{subject.BusinessName}}\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"large-4 large-offset-1 column\">\n    <rep-subject-form [selectedType]=\"selectedType\"\n      (subjectCreated)=\"subjectCreated($event)\">\n    </rep-subject-form>\n  </div>\n\n  <div class=\"large-1\"></div>\n</div>\n"

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"large-6 large-offset-3\">\n    <div class=\"button-group expanded\">\n      <a class=\"button primary\" (click)=\"elementChanged('job')\" [ngClass]=\"{'inverse': selectedType!='job'}\">\n        Commesse\n      </a>\n      <a class=\"button primary\" (click)=\"elementChanged('task')\" [ngClass]=\"{'inverse': selectedType!='task'}\">\n        Task\n      </a>\n      <a class=\"button primary\" (click)=\"elementChanged('activity')\" [ngClass]=\"{'inverse': selectedType!='activity'}\">\n        Attività\n      </a>\n    </div>\n  </div>\n  <br>\n\n  <div class=\"large-5 large-offset-1 column\">\n    <h4 class=\"row\">Lista tipi {{selectedType | translateJobElement:'plural'}}</h4>\n    <ul class=\"row main-list\">\n      <li *ngFor=\"let type of types; let i = index\">\n        <a (click)=\"openEditClick(type); editTypeIndex = i\">\n          <span *ngIf=\"selectedType!='activity'\">{{ type.Code }} - </span>{{type.Name}}\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"large-4 large-offset-1 column\">\n    <form ngNoForm *ngIf=\"!editing\" (keyup.enter)=\"createTypeClick()\" onSubmit=\"return false;\">\n      <h4 class=\"row\">Aggiungi tipo {{selectedType | translateJobElement}}</h4>\n      <div class=\"row\">\n        <label *ngIf=\"selectedType!='activity'\">Codice\n          <input type=\"text\" placeholder=\"Codice tipo {{selectedType | translateJobElement}}\" [(ngModel)]=\"newType.Code\">\n        </label>\n        <label>Nome\n          <input type=\"text\" placeholder=\"Nome tipo {{selectedType | translateJobElement}}\" [(ngModel)]=\"newType.Name\">\n        </label>\n      </div>\n      <div class=\"row submit-button\">\n        <p>\n          <a class=\"button primary\" (click)=\"createTypeClick()\">\n            Crea tipo\n          </a>\n        </p>\n        <div class=\"callout alert\" *ngIf=\"errors.forms.createType.codeRequired\">\n          <p>Uno o più campi non completi.</p>\n        </div>\n      </div>\n    </form>\n\n    <form ngNoForm *ngIf=\"editing\" (keyup.enter)=\"createTypeClick()\" onSubmit=\"return false;\">\n      <h4 class=\"row\">Modifica tipo {{selectedType | translateJobElement}}</h4>\n      <div class=\"row\">\n        <label *ngIf=\"selectedType!='activity'\">Codice\n          <input type=\"text\" placeholder=\"Codice tipo {{selectedType | translateJobElement}}\" [(ngModel)]=\"newType.Code\">\n        </label>\n        <label>Nome\n          <input type=\"text\" placeholder=\"Nome tipo {{selectedType | translateJobElement}}\" [(ngModel)]=\"newType.Name\">\n        </label>\n      </div>\n      <div class=\"row submit-button\">\n        <p>\n          <a class=\"text-button noedit\" (click)=\"noEditClick()\">\n            Annulla\n          </a>\n        </p>\n        <p>\n          <a class=\"button primary\" (click)=\"editTypeClick()\">\n            Modifica tipo\n          </a>\n          <a type=\"submit\" class=\"button delete\" (click)=\"deleteTypeClick()\">\n            Rimuovi tipo\n          </a>\n        </p>\n        <div class=\"callout alert\" *ngIf=\"errors.forms.createType.codeRequired\">\n          <p>Uno o più campi non completi.</p>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"large-1\"></div>\n</div>\n<simple-notifications [options]=\"{position: ['top', 'right']}\"></simple-notifications>\n"

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = " <nav class=\"off-canvas position-left reveal-for-large side-bar\" [ngClass]=\"{'toggle-in': !!toggled, 'toggle-out': (!toggled && toggled!=null)}\">\n    <div class=\"logo-container\">\n      <img src=\"assets/icons/logo.png\" alt=\"\" class=\"logo\">\n    </div>\n    <br>\n    <ul class=\"menu vertical\">\n      <p class=\"menu-area-title\">Gestione entità</p>\n      <li class=\"menu-item\" routerLinkActive=\"active\"><a routerLink=\"/subjects\">Creazione soggetti</a></li>\n      <li class=\"menu-item\" routerLinkActive=\"active\"><a routerLink=\"/jobs\">Creazione commesse</a></li>\n      <li class=\"menu-item\" routerLinkActive=\"active\"><a routerLink=\"/types\">Creazione tipi</a></li>\n      <br>\n      <p class=\"menu-area-title\">Gestione ore</p>\n      <li class=\"menu-item\" routerLinkActive=\"active\"><a routerLink=\"/activities\">Inserimento Ore</a></li>\n      <li class=\"menu-item\" routerLinkActive=\"active\"><a routerLink=\"/insert\">Inserimento Rapido</a></li>\n      <br>\n      <p class=\"menu-area-title\"></p>\n      <button class=\"text-button primary\" (click)=\"logout()\">Log Out</button>\n    </ul>\n</nav>\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(264);


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_service__ = __webpack_require__(290);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__error_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_service__ = __webpack_require__(300);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__toast_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_service__ = __webpack_require__(301);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__token_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http__ = __webpack_require__(155);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__http__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__http__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__http__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__http__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__http__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__http__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__http__["g"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sidebar_toggle_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(toggleService) {
        this.toggleService = toggleService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toggleService.isToggled().subscribe(function (toggled) { return _this.toggled = toggled; });
    };
    DashboardComponent.prototype.toggle = function () {
        this.toggleService.toggle();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rep-dashboard',
        template: __webpack_require__(484),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_sidebar_toggle_service__["a" /* SidebarToggleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_sidebar_toggle_service__["a" /* SidebarToggleService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarToggleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarToggleService = (function () {
    function SidebarToggleService() {
        this.toggled = false;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    SidebarToggleService.prototype.toggle = function () {
        this.toggled = !this.toggled;
        this.subject.next(this.toggled);
    };
    SidebarToggleService.prototype.isToggled = function () {
        return this.subject.asObservable();
    };
    return SidebarToggleService;
}());
SidebarToggleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SidebarToggleService);

//# sourceMappingURL=sidebar-toggle.service.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site__ = __webpack_require__(154);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__site__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subject__ = __webpack_require__(287);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__subject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job__ = __webpack_require__(285);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__job__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task__ = __webpack_require__(289);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__task__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activity__ = __webpack_require__(283);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__activity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job_type__ = __webpack_require__(284);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__job_type__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_type__ = __webpack_require__(288);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__task_type__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activity_type__ = __webpack_require__(282);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__activity_type__["a"]; });









//# sourceMappingURL=index.js.map

/***/ })

},[751]);
//# sourceMappingURL=main.bundle.js.map