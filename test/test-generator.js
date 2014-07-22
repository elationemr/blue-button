var expect = require('chai').expect;
var assert = require('chai').assert;
var lib = require('./test-lib.js');
var fs = require("fs");

var test = new lib.testXML();

// testing options/cases
var TEST_CCDA_SAMPLES = true;
var TEST_CCD = true;
var TEST_SECTIONS = true;

// test all ccda samples from ccda_samples (json generated by ccda-explorer)
if (TEST_CCDA_SAMPLES) {
    describe('ccda_samples', function () {
        describe('generating CCDA for all ccda_samples samples', function () {
            xit('should produce some xml, at the very least', function () {
                var stats = JSON.parse(fs.readFileSync('ccda-explorer/dump/stats.json')),
                    i = 0,
                    sum = 0;
                for (var sample in stats) {
                    i = stats[sample]["index"];
                    if (stats[sample]["full"][0]) { // add && (i < n) to shorten
                        for (var j = 0; j < stats[sample]["files"].length; j++) {
                            fileNameXML = i + "-" + j + ".xml";
                            if (true) { // replace with j < n to shorten
                                if (true) { // replace with fileNameXML == "[filename]" to narrow down
                                    var XMLDOMs = test.generateXMLDOMForEntireCCD('ccda-explorer/dump/', i + "-" + j + ".json", 'ccda-explorer/dump/', i + "-" + j + ".xml", 'ccda-explorer/dump_gen_xml/', sample + "_" + i + "-" + j + ".xml", false);
                                    sum++;
                                    assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                                    console.log("TOTAL ERRORS: " + test.errors["total"]);
                                }
                            }
                        }
                    }
                }
            });
        });
    });
}

// test whole CCD document
if (TEST_CCD) {
    describe('ccda', function () {
        describe('generating CCDA for entire CCD', function () {
            it('should match entire CCD', function () {
                var XMLDOMs = test.generateXMLDOMForEntireCCD('test/fixtures/files/json/', 'CCD_1.json', 'test/fixtures/files/generated/', 'CCD_1_gen.xml', 'test/fixtures/files/generated/', 'CCD_1_gen.xml');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);
            });
        });
    });
}

// test each section individually
if (TEST_SECTIONS) {
    describe('sections', function () {

        // test allergies section
        describe('generating CCDA for allergies section', function () {
            it('should match allergies section', function () {
                var XMLDOMs = test.generateXMLDOM('allergies');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);
            });
        });

        // test medications section
        describe('generating CCDA for medications section', function () {
            it('should match medications section', function () {
                var XMLDOMs = test.generateXMLDOM('medications');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);
            });
        });

        // test problems section
        describe('generating CCDA for problems section', function () {
            it('should match problems section', function () {
                var XMLDOMs = test.generateXMLDOM('problems');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);

            });
        });

        // test results section
        describe('generating CCDA for results section', function () {
            it('should match results section', function () {
                var XMLDOMs = test.generateXMLDOM('results');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);

            });
        });

        // test demographics section
        describe('generating CCDA for demographics section', function () {
            it('should match demographics section', function () {
                var XMLDOMs = test.generateXMLDOM('demographics');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);

            });
        });

        // test procedures section
        describe('generating CCDA for procedures section', function () {
            it('should match procedures section', function () {
                var XMLDOMs = test.generateXMLDOM('procedures');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);

            });
        });

        // test encounters section
        describe('generating CCDA for encounters section', function () {
            it('should match encounters section', function () {
                var XMLDOMs = test.generateXMLDOM('encounters');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);

            });
        });

        // // stub/reduced test for testing purposes
        // describe('generating a reduced test for simplicity', function() {
        //     it ('should match reduced test stub', function() {
        //         var XMLDOMs = test.generateStubs('stub_test1' , 'stub_test1_exp');

        //         assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
        //         console.log("TOTAL ERRORS: " + test.errors["total"]);

        //     });
        // });

        // test immunizations section
        describe('generating CCDA for immunizations section', function () {
            it('should match immunizations section', function () {
                var XMLDOMs = test.generateXMLDOM('immunizations');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);
            });
        });

        // test vitals section
        describe('generating CCDA for vitals section', function () {
            it('should match vitals section', function () {
                var XMLDOMs = test.generateXMLDOM('vitals');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);

            });
        });

        // test social history section
        describe('generating CCDA for social history section', function () {
            it('should match social history section', function () {
                var XMLDOMs = test.generateXMLDOM('social_history');

                assert.ok(test.isIdentical(XMLDOMs[0].documentElement, XMLDOMs[1].documentElement));
                console.log("TOTAL ERRORS: " + test.errors["total"]);
            });
        });
    });
}

// show the error summary
describe('show errors', function () {
    it('should show error summary', function () {
        console.log("\nERROR SUMMARY: " + JSON.stringify(test.errors, null, 4) + "\n" + JSON.stringify(test.error_settings, null, 4));
    });
});