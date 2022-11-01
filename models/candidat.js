const {DataTypes}=require('sequelize')
const db=require("../config/database")
const candidat=db.define('Candidat',{

    nom:{
        type:DataTypes.STRING(20),
        allowNull:false,
        validate:{
           
            notNull: {
                msg: 'Please enter your name'
              }

            
        }

    },
    e_mail:{
        type:DataTypes.INTEGER,
        allowNull:false,
     validate:{
        notNull: {
            msg: 'Please enter your mail'
          },
          isEmail: true, 
          
     }

    },
    likedIn:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            isUrl:true
            
        }
       
        
    },
    profil:{
        type:DataTypes.STRING,
        allowNull:false,
        notNull: {
            msg: 'Please enter your profile'
          }
        
    },

    grade:{
        type:DataTypes.INTEGER,
        allowNull:true,
        
    },
    ecole_lis:{
        type:DataTypes.INTEGER,
        allowNull:true,
        
    },


    ecole_ing:{
        type:DataTypes.INTEGER,
        allowNull:true,
        
    },


    competence:{
        type:DataTypes.INTEGER,
        allowNull:true,
        
    },


    ecole_mas:{
        type:DataTypes.INTEGER,
        allowNull:true,
        
    },


    experience:{
        type:DataTypes.INTEGER,
        allowNull:true,
        
    },



    cv:{
        type:DataTypes.INTEGER,
        allowNull:true,
        
    },


})

module.exports=candidat