/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.4
Version: 1.7.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.7/admin/
*/

var handleDataTableColVis = function() {
	"use strict";
    
    if ($('#data-table').length !== 0) {
        $('#data-table').DataTable({
            dom: 'C<"clear">lfrtip'
        });
    }
};

var TableManageColVis = function () {
	"use strict";
    return {
        //main function
        init: function () {
            $.getScript('assets/plugins/DataTables/js/jquery.dataTables.js').done(function() {
                $.getScript('assets/plugins/DataTables/js/dataTables.colVis.js').done(function() {
                    handleDataTableColVis();
                });
            });
        }
    };
}();