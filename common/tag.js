
TagsUtil = {
    findOrCreate: function(title) {
        var name = this.toSlug(title); //Sanitized url valid tagname

        var tag = CloudspiderTags.findOne({
            name: name
        });
        if(tag) {
            return tag;
        }
        CloudspiderTags.insert({
            name: name,
            title: title,
            visitCount: 0
        });

        return CloudspiderTags.findOne({
            name: name
        });

    },

    toSlug: function(str) {
        return str.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    },

};

