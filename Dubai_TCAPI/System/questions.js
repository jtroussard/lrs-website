test.AddQuestion(
    new Question (
        DubaiMetro.CourseActivity.id + "/DubaiAssessment/interactions.system_1",
        "What general shape does the metro system lines make:",
        QUESTION_TYPE_CHOICE,
        ["A circle.", "Paralel lines.", "A \"U\" shape.", "A \"T\" shape."],
        "A \"T\" shape.",
        "obj_system"
    )
);

test.AddQuestion(
    new Question (
        DubaiMetro.CourseActivity.id + "/DubaiAssessment/interactions.system_2",
        "What two colors identify the metro lines:",
        QUESTION_TYPE_CHOICE,
        ["blue and gold", "red and green", "black and yellow", "blue and silver"],
        "red and green",
        "obj_system"
    )
);

test.AddQuestion(
    new Question (
        DubaiMetro.CourseActivity.id + "/DubaiAssessment/interactions.system_3",
        "The green line has ____ stations",
        QUESTION_TYPE_NUMERIC,
        null,
        20,
        "obj_system"
    )
);

test.AddQuestion(
    new Question (
        DubaiMetro.CourseActivity.id + "/DubaiAssessment/interactions.system_4",
        "Does the metro system offer free wi-fi?.",
        QUESTION_TYPE_TF,
        null,
        true,
        "obj_system"
    )
);

test.AddQuestion(
    new Question (
        DubaiMetro.CourseActivity.id + "/DubaiAssessment/interactions.system_6",
        "About how far a walk is it to the Burj Khalifa from the nearest Metro station:",
        QUESTION_TYPE_NUMERIC,
        null,
        10,
        "obj_system"
    )
);

test.AddQuestion(
    new Question (
        DubaiMetro.CourseActivity.id + "/DubaiAssessment/interactions.system_7",
        "Throughout the system there are over _____ CCTV cameras to monitor any sort of situation that might arise:",
        QUESTION_TYPE_NUMERIC,
        null,
        3000,
        "obj_system"
    )
);

test.AddQuestion(
    new Question (
        DubaiMetro.CourseActivity.id + "/DubaiAssessment/interactions.system_8",
        "Does the metro system connect to the Dubai Marina Tram.",
        QUESTION_TYPE_TF,
        null,
        true,
        "obj_system"
    )
);

