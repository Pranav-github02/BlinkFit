const express = require("express");
const router = express.Router();
const abs = require("../DATA/workouts/abs.json");
const adductors = require("../DATA/workouts/adductors.json");
const allexercises = require("../DATA/workouts/allexercises.json");
const arms = require("../DATA/workouts/arms.json");
const back = require("../DATA/workouts/back.json");
const biceps = require("../DATA/workouts/biceps.json");
const bodyparts = require("../DATA/workouts/bodyParts.json");
const calves = require("../DATA/workouts/calves.json");
const cardio = require("../DATA/workouts/cardio.json");
const chest = require("../DATA/workouts/chest.json");
const forearms = require("../DATA/workouts/forearms.json");
const glutes = require("../DATA/workouts/glutes.json");
const legs = require("../DATA/workouts/legs.json");
const quads = require("../DATA/workouts/quads.json");
const shoulders = require("../DATA/workouts/shoulders.json");
const targetmuscles = require("../DATA/workouts/targetMuscles.json");
const traps = require("../DATA/workouts/traps.json");
const triceps = require("../DATA/workouts/triceps.json");
const upperback = require("../DATA/workouts/upperback.json");

router.get("/:workout",(req,res)=>{
    const workout = req.params.workout;
    if(workout==="abs"){
        return res.status(200).json({abs});
    }
    else if(workout==="adductors"){
        return res.status(200).json({adductors});
    }
    else if(workout==="allexercises"){
        return res.status(200).json({allexercises});
    }
    else if(workout==="arms"){
        return res.status(200).json({arms});
    }
    else if(workout==="back"){
        return res.status(200).json({back});
    }
    else if(workout==="biceps"){
        return res.status(200).json({biceps});
    }
    else if(workout==="bodyparts"){
        return res.status(200).json({bodyparts});
    }
    else if(workout==="calves"){
        return res.status(200).json({calves});
    }
    else if(workout==="cardio"){
        return res.status(200).json({cardio});
    }
    else if(workout==="chest"){
        return res.status(200).json({chest});
    }
    else if(workout==="forearms"){
        return res.status(200).json({forearms});
    }
    else if(workout==="glutes"){
        return res.status(200).json({glutes});
    }
    else if(workout==="legs"){
        return res.status(200).json({legs});
    }
    else if(workout==="quads"){
        return res.status(200).json({quads});
    }
    else if(workout==="shoulders"){
        return res.status(200).json({shoulders});
    }
    else if(workout==="targetmuscles"){
        return res.status(200).json({targetmuscles});
    }
    else if(workout==="traps"){
        return res.status(200).json({traps});
    }
    else if(workout==="triceps"){
        return res.status(200).json({triceps});
    }
    else if(workout==="upperback"){
        return res.status(200).json({upperback});
    }
})



module.exports = router;
