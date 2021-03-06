namespace SpriteKind {
    export const Heart = SpriteKind.create()
    export const bigboi = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speech_finnished == 1) {
        controller.moveSprite(Cherry, 200, 200)
        pause(500)
        controller.moveSprite(Cherry, 100, 100)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Skip += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    projectile.destroy(effects.coolRadial, 500)
    music.knock.playUntilDone()
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    music.baDing.playUntilDone()
    heart.destroy()
    pause(100)
})
sprites.onOverlap(SpriteKind.bigboi, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    big_boi.destroy(effects.coolRadial, 500)
    music.knock.playUntilDone()
    pause(100)
})
info.onLifeZero(function () {
    Cherry.destroy(effects.spray, 500)
    pause(1000)
    info.changeScoreBy(-1)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bigboi, function (sprite, otherSprite) {
    if (Speech_finnished == 1) {
        heath_go_brrr = 0
        big_boi.setVelocity(100, 100)
        Boss_health += -1
        projectile.destroy(effects.coolRadial, 500)
        big_boi.destroy(effects.coolRadial, 500)
        pause(1000)
        heath_go_brrr += 1
    }
})
let heath_go_brrr = 0
let big_boi: Sprite = null
let heart: Sprite = null
let projectile: Sprite = null
let Speech_finnished = 0
let Skip = 0
let Cherry: Sprite = null
tiles.setTilemap(tilemap`level1`)
Cherry = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Player)
Cherry.setPosition(60, 87)
let Chicken = sprites.create(img`
    ..........bbbbbb.....f..........
    .......bbb444444bb..ff..........
    .....2224444ddd444b.f...........
    ....242224444dddd44e............
    ...244242444422ddd4be.......f...
    ..244244244442444d44be...fff....
    .2b442444244424444d4be..ff......
    .2b44244442442444444bbef........
    2bbb2444442424444444bbe.........
    2bbb2444442442444444bbe.........
    2bb424444424424444444bbe........
    2bb4244444424244444444be...ff...
    2bb42444444244244444444e.ff.ff..
    2bbb244bbb4244244444444eff......
    22bbb244bb42b442444444bef.......
    .2bbb2b44bb2b44424444bbe........
    .22bbb2bbbb42bbb424442bbe.......
    ..eeebb222bb42bbb422224be.......
    .f.eeeeebb222b2244b4424be.......
    .f...eeeeee22222222224bbe.......
    ff....feeeee222bb44bbbbee.......
    f....ff.....ef22bbbbbbbec.......
    f...ff......f.ee2bbbbeebdb......
    f...f......ff....eeeeecdddb.2...
    f...f......f...........cd21bb2b.
    f...f......f............cd2112bb
    ....f.....ff.............b21221c
    ....f.....ff.............c12221c
    .........................cd222c.
    .........................cb2122.
    ..........................c2c...
    ................................
    `, SpriteKind.Enemy)
Chicken.setPosition(120, 80)
Chicken.say("\"press a To skip speech", 2000)
pause(5000)
if (Skip == 0) {
    Chicken.say("Hello", 2000)
    pause(2000)
    Chicken.say("I see you there", 2000)
    pause(2000)
    Chicken.say("Are you sure you want to be here", 2000)
    pause(2000)
    Chicken.say(".........", 5000)
    pause(5000)
    Chicken.say("Well you asked for it", 2000)
}
Speech_finnished = 1
info.setLife(6)
controller.moveSprite(Cherry)
let Boss_health = 3
forever(function () {
    if (Speech_finnished == 1) {
        if (Boss_health == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . 2 2 b b b b b . . . . . . . 
                . 2 b 4 4 4 4 4 4 b . . . . . . 
                2 2 4 4 4 4 d d 4 4 b . . . . . 
                2 b 4 4 4 4 4 4 d 4 b . . . . . 
                2 b 4 4 4 4 4 4 4 d 4 b . . . . 
                2 b 4 4 4 4 4 4 4 4 4 b . . . . 
                2 b 4 4 4 4 4 4 4 4 4 e . . . . 
                2 2 b 4 4 4 4 4 4 4 b e . . . . 
                . 2 b b b 4 4 4 b b b e . . . . 
                . . e b b b b b b b e e . . . . 
                . . . e e b 4 4 b e e e b . . . 
                . . . . . e e e e e e b d b b . 
                . . . . . . . . . . . b 1 1 1 b 
                . . . . . . . . . . . c 1 d d b 
                . . . . . . . . . . . c 1 b c . 
                . . . . . . . . . . . . c c . . 
                `, Chicken, 50, 50)
            projectile.follow(Cherry, 60)
            pause(2000)
            projectile.destroy()
        } else if (Boss_health == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . 2 2 b b b b b . . . . . . . 
                . 2 b 4 4 4 4 4 4 b . . . . . . 
                2 2 4 4 4 4 d d 4 4 b . . . . . 
                2 b 4 4 4 4 4 4 d 4 b . . . . . 
                2 b 4 4 4 4 4 4 4 d 4 b . . . . 
                2 b 4 4 4 4 4 4 4 4 4 b . . . . 
                2 b 4 4 4 4 4 4 4 4 4 e . . . . 
                2 2 b 4 4 4 4 4 4 4 b e . . . . 
                . 2 b b b 4 4 4 b b b e . . . . 
                . . e b b b b b b b e e . . . . 
                . . . e e b 4 4 b e e e b . . . 
                . . . . . e e e e e e b d b b . 
                . . . . . . . . . . . b 1 1 1 b 
                . . . . . . . . . . . c 1 d d b 
                . . . . . . . . . . . c 1 b c . 
                . . . . . . . . . . . . c c . . 
                `, Chicken, 50, 50)
            projectile.follow(Cherry, 80)
            pause(2000)
            projectile.destroy()
        } else if (Boss_health == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . 2 2 b b b b b . . . . . . . 
                . 2 b 4 4 4 4 4 4 b . . . . . . 
                2 2 4 4 4 4 d d 4 4 b . . . . . 
                2 b 4 4 4 4 4 4 d 4 b . . . . . 
                2 b 4 4 4 4 4 4 4 d 4 b . . . . 
                2 b 4 4 4 4 4 4 4 4 4 b . . . . 
                2 b 4 4 4 4 4 4 4 4 4 e . . . . 
                2 2 b 4 4 4 4 4 4 4 b e . . . . 
                . 2 b b b 4 4 4 b b b e . . . . 
                . . e b b b b b b b e e . . . . 
                . . . e e b 4 4 b e e e b . . . 
                . . . . . e e e e e e b d b b . 
                . . . . . . . . . . . b 1 1 1 b 
                . . . . . . . . . . . c 1 d d b 
                . . . . . . . . . . . c 1 b c . 
                . . . . . . . . . . . . c c . . 
                `, Chicken, 50, 50)
            projectile.follow(Cherry, 97)
            pause(2000)
            projectile.destroy()
        }
    }
})
forever(function () {
    if (Speech_finnished == 1) {
        pause(2000)
        heart = sprites.create(assets.image`Heart`, SpriteKind.Heart)
        pause(2000)
        heart.destroy()
    }
})
forever(function () {
    if (Speech_finnished == 1) {
        pause(5000)
        for (let index = 0; index < 5; index++) {
            big_boi = sprites.createProjectileFromSprite(img`
                ..........bbbbbb................
                .......bbb444444bb..............
                .....2244444ddd444b.............
                ....244444444dddd44e............
                ...244444444444ddd4be...........
                ..244444444444444d44be..........
                .2b444444444444444d4be..........
                .2b44444444444444444bbe.........
                2bbb4444444444444444bbe.........
                2bbb4444444444444444bbe.........
                2bb4b4444444444444444bbe........
                2bb4444444444444444444be........
                2bb44444444444444444444e........
                2bbb444bbb4444444444444e........
                22bbb444bb4bb444444444be........
                .2bbbbb44bbbb44444444bbe........
                .22bbbbbbbb44bbb444444bbe.......
                ..eeebbbbbbb44bbb444444be.......
                ...eeeeebbbbbbbb44b4444be.......
                .....eeeeee222bb44bbb4bbe.......
                .......eeeee222bb44bbbbee.......
                ............e222bbbbbbbec.......
                ..............ee2bbbbeebdb......
                .................eeeeecdddb.....
                .......................cd11bbbb.
                ........................cd111dbb
                .........................b11111c
                .........................c11dd1c
                .........................cd1dbc.
                .........................cb11c..
                ..........................ccc...
                ................................
                `, Chicken, -1009999999, -1009999999)
            big_boi.setKind(SpriteKind.bigboi)
            pause(5)
            big_boi = sprites.createProjectileFromSprite(img`
                ..........bbbbbb................
                .......bbb444444bb..............
                .....2244444ddd444b.............
                ....244444444dddd44e............
                ...244444444444ddd4be...........
                ..244444444444444d44be..........
                .2b444444444444444d4be..........
                .2b44444444444444444bbe.........
                2bbb4444444444444444bbe.........
                2bbb4444444444444444bbe.........
                2bb4b4444444444444444bbe........
                2bb4444444444444444444be........
                2bb44444444444444444444e........
                2bbb444bbb4444444444444e........
                22bbb444bb4bb444444444be........
                .2bbbbb44bbbb44444444bbe........
                .22bbbbbbbb44bbb444444bbe.......
                ..eeebbbbbbb44bbb444444be.......
                ...eeeeebbbbbbbb44b4444be.......
                .....eeeeee222bb44bbb4bbe.......
                .......eeeee222bb44bbbbee.......
                ............e222bbbbbbbec.......
                ..............ee2bbbbeebdb......
                .................eeeeecdddb.....
                .......................cd11bbbb.
                ........................cd111dbb
                .........................b11111c
                .........................c11dd1c
                .........................cd1dbc.
                .........................cb11c..
                ..........................ccc...
                ................................
                `, Chicken, -1009999999, -1009999999)
            big_boi.setKind(SpriteKind.bigboi)
            pause(5)
            big_boi = sprites.createProjectileFromSprite(img`
                ..........bbbbbb................
                .......bbb444444bb..............
                .....2244444ddd444b.............
                ....244444444dddd44e............
                ...244444444444ddd4be...........
                ..244444444444444d44be..........
                .2b444444444444444d4be..........
                .2b44444444444444444bbe.........
                2bbb4444444444444444bbe.........
                2bbb4444444444444444bbe.........
                2bb4b4444444444444444bbe........
                2bb4444444444444444444be........
                2bb44444444444444444444e........
                2bbb444bbb4444444444444e........
                22bbb444bb4bb444444444be........
                .2bbbbb44bbbb44444444bbe........
                .22bbbbbbbb44bbb444444bbe.......
                ..eeebbbbbbb44bbb444444be.......
                ...eeeeebbbbbbbb44b4444be.......
                .....eeeeee222bb44bbb4bbe.......
                .......eeeee222bb44bbbbee.......
                ............e222bbbbbbbec.......
                ..............ee2bbbbeebdb......
                .................eeeeecdddb.....
                .......................cd11bbbb.
                ........................cd111dbb
                .........................b11111c
                .........................c11dd1c
                .........................cd1dbc.
                .........................cb11c..
                ..........................ccc...
                ................................
                `, Chicken, -1009999999, -1009999999)
            big_boi.setKind(SpriteKind.bigboi)
            pause(5)
        }
        pause(5000)
    }
})
forever(function () {
    if (Speech_finnished == 1) {
        pause(1000)
        info.changeScoreBy(1)
    }
})
forever(function () {
    if (Speech_finnished == 1) {
        music.playMelody("E B C5 A B G A F ", 130)
    }
})
forever(function () {
    if (heath_go_brrr == 0) {
        if (Speech_finnished == 1) {
            if (Boss_health == 2) {
                Speech_finnished = 0
                info.changeScoreBy(100)
                Chicken.say("I cant loose ")
                pause(2000)
                Chicken.say("I guess ill have to go even faster", 1500)
                pause(2000)
                Speech_finnished = 1
            } else if (Boss_health == 1) {
                Speech_finnished = 0
                info.changeScoreBy(100)
                Chicken.say("I must keep the balance", 1500)
                pause(2000)
                Speech_finnished = 1
            } else if (Boss_health == 0) {
                Speech_finnished = 0
                info.changeScoreBy(100)
                Chicken.say("do you have any idea what you have done", 1500)
                pause(2000)
                Chicken.say("i have to......", 1000)
                pause(2000)
                Chicken.say("may you live with this curse till the end of time", 1500)
                pause(2000)
                Chicken.destroy(effects.starField, 500)
                pause(5000)
                game.over(true, effects.melt)
            }
        }
    }
})
