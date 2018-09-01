import {delay} from 'redux-saga'

describe("This is an asynce test block", ()=>{
    it("should log done when resolved", (done)=> {
        setTimeout(()=>{
            console.log("Done");
            done();
        },2000);
    })
    it("should log resolve then promise is resolved",()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("Resolve");
                resolve();
            },2000);
        })
    })
    it("should log async when the async method resolves",async()=>{
        await delay(1000);
    })
    it("should log async when the async method resolves",async()=>{
        await new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("Async");
                resolve();
            },2000);
        });
    })
})