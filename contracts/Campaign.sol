// SPDX-License-Identifier: Unlicensed

pragma solidity >= 0.5.0 < 0.9.0;

contract CampaignFactory{

    address[] public deployedCampaigns;

    event campaignCreated(
        string title,
        uint requiredAmount,
        address indexed owner,
        address campaignAddress,
        string imageURI,
        uint indexed timestamp,
        string indexed category
    );

    function createCampaign(
        string memory campaignTitle,
        uint requiredCampaignAmount,
        string memory imageURI,
        string memory category,
        string memory storyURI) public
    {
        Campaign newCampaign = new Campaign(
            campaignTitle, requiredCampaignAmount, imageURI, storyURI);


        deployedCampaigns.push(address(newCampaign));

        emit campaignCreated(
            campaignTitle,
            requiredCampaignAmount,
            msg.sender,
            address(newCampaign),
            imageURI,
            block.timestamp,
            category
        );
    }
}


contract Campaign{
    string public title;
    uint public requiredAmount;
    string public image;
    string public story;
    address payable public owner;
    uint public receivedAmount;

    event donated(address indexed donar, uint indexed amount, uint indexed timestamp);

    constructor(
        string memory campaignTitle,
        uint requiredCampaignAmount,
        string memory campaignImage,
        string memory campaignStory
    ) {
        title = campaignTitle;
        requiredAmount = requiredCampaignAmount;
        image = campaignImage;
        story = campaignStory;
        owner = payable(msg.sender);
    }


    function donate() public payable {
        require(requiredAmount > receivedAmount, "required amount fulfilled");
        owner.transfer(msg.value);
        receivedAmount += msg.value;
        emit donated(msg.sender, msg.value, block.timestamp);
    }
}