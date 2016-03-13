'use strict';

var assert = require('assert');
var fs = require('fs');
var Checker = require('jscs');

describe('preset', function () {
    var checker;

    beforeEach(function () {
        checker = new Checker();
        checker.registerDefaultRules();
        checker.configure({
            preset: __dirname + '/../preset.json'
        });
    });

    it('should not report any errors from the sample file', function () {
        var fileName = 'sample.js';
        var content = fs.readFileSync(__dirname + '/data/' + fileName, 'utf8');
        assert(checker.checkString(content, fileName).isEmpty());
    });
});
