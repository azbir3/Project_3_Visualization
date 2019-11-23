var collisionReasons;
var collisionReasonCategories;
var unspecifiedCategoryIndex = 7;
var circleCategoryIndex = 1;
var circleSizes = [5, 6, 7, 8, 9];
var symbolSizes = [1, 1.15, 1.4, 1.55, 1.8];
var colorOpacities = [0.4, 0.55, 0.7, 0.85, 1];
var injuryColor = '#ffbf00';
var deathColor = '#FF0000'; //#ff4000
var injuryColors = ['#ffa64d', '#ff8c1a', '#e67300', '#b35900', '#804000'];
var deathColors = ['#ff6666', '#ff3333', '#ff0000', '#cc0000', '#990000'];

function initializeCollisionMappings() {
	//Categories for collision reasons
	collisionReasonCategories = new Array();
	collisionReasonCategories[0] = {category: 'Vehicular Problems', path: 'M0 0 L14 0 L14 14 L0 14 Z'};
	collisionReasonCategories[1] = {category: 'Driver\'s Fault', path: google.maps.SymbolPath.CIRCLE};
	collisionReasonCategories[2] = {category: 'Driver Intoxicated', path: 'M7 0 L14 7 L7 14 L0 7 Z'};
	collisionReasonCategories[3] = {category: 'Improper Street Conditions', path: 'M7 0 L14 14 L0 14 Z'};
	collisionReasonCategories[4] = {category: 'Driver\'s Health Issues', path: 'M5 0 L9 0 L9 5 L14 5 L14 9 L9 9 L9 14 L5 14 L5 9 L0 9 L0 5 L5 5 Z'};
	collisionReasonCategories[5] = {category: 'Passenger\'s Fault', path: 'M0 0 L9 0 L9 7 L4 7 L4 14 L0 14 Z'};
	collisionReasonCategories[6] = {category: 'Pedestrian\'s Fault', path: 'M5 0 L14 0 L14 14 L10 14 L10 7 L5 7 Z'};
	collisionReasonCategories[7] = {category: 'Not Specified', path: 'M0 0 L2 0 L7 3 L12 0 L14 0 L14 2 L11 5 L14 6 L14 8 L11 9 L14 12 L14 14 L12 14 L7 11 L2 14 L0 14 L0 12 L3 9 L0 8 L0 6 L3 5 L0 2 Z'};
	
	//Mapping array
	collisionReasons = new Array();
	collisionReasons['Accelerator Defective'] = 0;
	collisionReasons['Aggressive Driving/Road Rage'] = 1;
	collisionReasons['Alcohol Involvement'] = 2;
	collisionReasons['Animals Action'] = 3;
	collisionReasons['Backing Unsafely'] = 1;
	collisionReasons['Brakes Defective'] = 0;
	collisionReasons['Cell Phone (hand-held)'] = 1;
	collisionReasons['Cell Phone (hands-free)'] = 1;
	collisionReasons['Driver Inattention/Distraction'] = 1;
	collisionReasons['Driver Inexperience'] = 1;
	collisionReasons['Driverless/Runaway Vehicle'] = 1;
	collisionReasons['Drugs (Illegal)'] = 2;
	collisionReasons['Failure to Keep Right'] = 1;
	collisionReasons['Failure to Yield Right-of-Way'] = 1;
	collisionReasons['Fatigued/Drowsy'] = 4;
	collisionReasons['Fell Asleep'] = 4;
	collisionReasons['Following Too Closely'] = 1;
	collisionReasons['Glare'] = 3;
	collisionReasons['Headlights Defective'] = 0;
	collisionReasons['Illness'] = 4;
	collisionReasons['Lane Marking Improper/Inadequate'] = 3;
	collisionReasons['Lost Consciousness'] = 4;
	collisionReasons['Obstruction/Debris'] = 3;
	collisionReasons['Other Electronic Device'] = 1;
	collisionReasons['Other Lighting Defects'] = 0;
	collisionReasons['Other Vehicular'] = 0;
	collisionReasons['Outside Car Distraction'] = 1;
	collisionReasons['Oversized Vehicle'] = 3;
	collisionReasons['Passenger Distraction'] = 5;
	collisionReasons['Passing or Lane Usage Improper'] = 1;
	collisionReasons['Pavement Defective'] = 3;
	collisionReasons['Pavement Slippery'] = 3;
	collisionReasons['Pedestrian/Bicyclist/Other Pedestrian Error/Confusion'] = 6;
	collisionReasons['Physical Disability'] = 4;
	collisionReasons['Prescription Medication'] = 4;
	collisionReasons['Reaction to Other Uninvolved Vehicle'] = 1;
	collisionReasons['Shoulders Defective/Improper'] = 4;
	collisionReasons['Steering Failure'] = 0;
	collisionReasons['Tow Hitch Defective'] = 0;
	collisionReasons['Traffic Control Device Improper/Non-Working'] = 3;
	collisionReasons['Traffic Control Disregarded'] = 3;
	collisionReasons['Turning Improperly'] = 1;
	collisionReasons['Unsafe Lane Changing'] = 1;
	collisionReasons['Unsafe Speed'] = 1;
	collisionReasons['Unspecified'] = 7;
	collisionReasons['View Obstructed/Limited'] = 0;
	collisionReasons['Windshield Inadequate'] = 0;
	collisionReasons['Tire Failure/Inadequate'] = 0;
}