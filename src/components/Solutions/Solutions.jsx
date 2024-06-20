import './Solutions.css'
function Solutions() {
    return (
        <div className={'section-wrapper'}>
            <div className={'section-header'}>
                How Streamiverse Works
            </div>
            <div className={'solutions-content'}>
                <div className={'solution-card wide-card'}>
                    <img alt={'Solution 1'}/>
                    <div className={'card-text'}>
                        <div className={'section-subheader-number'}>
                            #1
                        </div>
                        <div className={'section-subheader'}>
                            Sign Up
                        </div>
                        <div className={'section-text'}>
                            Create an account.
                        </div>
                    </div>
                </div>
                <div className={'solution-card'}>
                    <img alt={'Solution 2'}/>
                    <div className={'card-text'}>
                        <div className={'section-subheader-number'}>
                            #2
                        </div>
                        <div className={'section-subheader'}>
                            Integrate Tools
                        </div>
                        <div className={'section-text'}>
                            Customize your streaming setup
                        </div>
                    </div>
                </div>
                <div className={'solution-card'}>
                    <img alt={'Solution 1'}/>
                    <div className={'card-text'}>
                        <div className={'section-subheader-number'}>
                            #3
                        </div>
                        <div className={'section-subheader'}>
                            Start Accepting Donations
                        </div>
                        <div className={'section-text'}>
                            Use multiple payment methods
                        </div>
                    </div>
                </div>
                <div className={'solution-card wide-card'}>
                    <img alt={'Solution 4'}/>
                    <div className={'card-text'}>
                        <div className={'section-subheader-number'}>
                            #4
                        </div>
                        <div className={'section-subheader'}>
                            Withdraw Funds Instantly
                        </div>
                        <div className={'section-text'}>
                            Access your earnings in real-time.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions;