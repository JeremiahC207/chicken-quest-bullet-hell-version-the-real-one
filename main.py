def on_b_pressed():
    pass
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

projectile: Sprite = None
Cherry = sprites.create(img("""
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
    """),
    SpriteKind.player)
Cherry.set_position(26, 45)
controller.move_sprite(Cherry)
Chicken = sprites.create(img("""
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
    """),
    SpriteKind.player)
Chicken.set_position(120, 80)
pause(1000)
Chicken.say("Hello", 2000)
pause(2000)
Chicken.say("I see you there", 2000)
pause(2000)
Chicken.say("Are you sure you want to be here", 2000)
pause(2000)
Chicken.say(".........", 5000)
pause(5000)
Chicken.say("Well you asked for it", 2000)

def on_forever():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        Chicken,
        50,
        50)
    projectile.follow(Cherry, 80)
    pause(200)
forever(on_forever)
