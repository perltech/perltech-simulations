import { ParallaxProvider, Parallax } from "react-scroll-parallax"

const Poem = () => {
    return (
        <ParallaxProvider>
            <section className='poem'>
                <section>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>Open my heart</p>
                    </Parallax>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>So that it may search for truth</p>
                    </Parallax>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>In the world</p>
                    </Parallax>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>Outside of this surgical gallery.</p>
                    </Parallax>
                </section>
                <section>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>The sterile steel you drag across my chest</p>
                    </Parallax>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>Bleeds out all that was left inside.</p>
                    </Parallax>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>My white blood cells</p>
                    </Parallax>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>And, whatever harm they couldn’t help but absorb.</p>
                    </Parallax>
                </section>
                <section>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>Take me apart</p>
                    </Parallax>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>With your own hands</p>
                    </Parallax>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>Show the spectators who I am to you.</p>
                    </Parallax>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>And, let me see it, for myself</p>
                    </Parallax>
                    <Parallax rotateX={['0deg','360deg']}>
                        <p>Before the ventilator expires.</p>
                    </Parallax>
                </section>
            </section>
        </ParallaxProvider>
    )
}

export default Poem;