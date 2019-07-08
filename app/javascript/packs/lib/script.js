import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'

import 'jquery-slimscroll'
import 'jquery-ui/ui/widgets/sortable.js'
import 'jquery-ui/ui/widgets/datepicker.js'
import 'jquery-ui/themes/base/datepicker.css'

import 'admin-lte'
import 'chart.js'

import * as jsonFromData from 'json-form-data'
window.jsonFromData = jsonFromData;

window._chunk = (target, size) => {
    return target.reduce((memo, value, index) => {
      if (index % (size) == 0 && index !== 0) memo.push([]) ;
      memo[memo.length - 1].push(value)
      return memo
    }, [[]]);
  }
window._has_error = (ids) => {
  ids = ids || [];
  ids.forEach(function (id) {
    $("#" + id).parents(".input-group, .form-group").addClass("has-error");
  })
}
window._remove_has_error = () => {
  $(".has-error").removeClass("has-error")
}
window._select_list_i18n = (list, prefix = "", vm) => {
  if (list.length == 0) {
    return [];
  }
  
  const priorities_i18n = [];
  prefix = prefix.charAt(prefix.length - 1) == "." ? prefix : [prefix, "."].join("")
  list.forEach((p) => {
      priorities_i18n.push({
          text: vm.$i18n.t(prefix + p.value),
          value: p.value
      });
  });
  return priorities_i18n;
}

window.paginate_url = (targets, page_no) => {
  return [targets, page_no ? "/page/" + page_no : "", ".json"].join("");
}


// import 'bootstrap3-wysihtml5-bower/dist/amd/bootstrap3-wysihtml5.all.js'
