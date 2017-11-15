DubaiMetro = {};

DubaiMetro.CourseActivity = {
    id: "http://id.tincanapi.com/activity/tincan-prototypes/dubaimetro",
    definition: {
        type: "http://adlnet.gov/expapi/activities/course",
        name: {
            "en-US": "Dubai Metro Information- Tin Can Course"
        },
        description: {
            "en-US": "Public Service Type Information on the Dubai Metro System."
        }
    }
};

DubaiMetro.getContext = function(parentActivityId, isAssessment) {
    isAssessment = typeof isAssessment !== 'undefined' ? isAssessment : false;
    var ctx = {
        contextActivities: {
            grouping: [
                {
                    id: DubaiMetro.CourseActivity.id
                },
                {
                    id: "http://id.tincanapi.com/activity/tincan-prototypes"
                }
            ],
            category: [
                 {
                    id: "http://id.tincanapi.com/recipe/tincan-prototypes/golf/1",
                    definition: {
                        type: "http://id.tincanapi.com/activitytype/recipe"
                    }
                },
                {
                    id: "http://id.tincanapi.com/activity/tincan-prototypes/elearning",
                    definition: {
                        type: "http://id.tincanapi.com/activitytype/source",
                        name: {
                            "en-US": "E-learning course"
                        },
                        description: {
                            "en-US": "An e-learning course built using the golf prototype framework."
                        }
                    }
                }
            ]
        }
    };
    if (parentActivityId !== undefined && parentActivityId !== null) {
        ctx.contextActivities.parent = {
            id: parentActivityId
        };
    }
    if (isAssessment){
        ctx.contextActivities.grouping.push({
            id: DubaiMetro.CourseActivity.id + "/DubaiMetroAssessment"
        });
    }
    return ctx;
};
