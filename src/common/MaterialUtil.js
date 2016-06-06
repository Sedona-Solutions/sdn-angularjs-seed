export let  buildToggler = ($mdSidenav, $log, navID) => {
    return () => {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
            .toggle()
            .then(function () {
                $log.debug("toggle " + navID + " is done");
            });
    }
};
