import Ember from 'ember';

export function eq(params/*, hash*/) {
	for (var i = 0; i < params.length-1; i++) { 
    	if(params[i] !== params[i+1]){
    		return false;
    	}
	}
	return true;
}

export default Ember.Helper.helper(eq);
