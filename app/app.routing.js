"use strict";
var router_1 = require('@angular/router');
var center_component_1 = require('./center/center.component');
var appRoutes = [
    {
        path: 'center',
        component: center_component_1.CenterComponent
    },
    {
        path: '',
        redirectTo: '/center',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map