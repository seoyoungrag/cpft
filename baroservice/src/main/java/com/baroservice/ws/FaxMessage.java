
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>FaxMessage complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="FaxMessage"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="SendKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SendFileName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SendPageCount" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="SuccessPageCount" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="SendResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SenderNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ReceiveCorp" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ReceiverName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ReceiverNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SendDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="RefKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SendState" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "FaxMessage", propOrder = {
    "sendKey",
    "id",
    "sendFileName",
    "sendPageCount",
    "successPageCount",
    "sendResult",
    "senderNum",
    "receiveCorp",
    "receiverName",
    "receiverNum",
    "sendDT",
    "refKey",
    "sendState"
})
public class FaxMessage {

    @XmlElement(name = "SendKey")
    protected String sendKey;
    @XmlElement(name = "ID")
    protected String id;
    @XmlElement(name = "SendFileName")
    protected String sendFileName;
    @XmlElement(name = "SendPageCount")
    protected int sendPageCount;
    @XmlElement(name = "SuccessPageCount")
    protected int successPageCount;
    @XmlElement(name = "SendResult")
    protected String sendResult;
    @XmlElement(name = "SenderNum")
    protected String senderNum;
    @XmlElement(name = "ReceiveCorp")
    protected String receiveCorp;
    @XmlElement(name = "ReceiverName")
    protected String receiverName;
    @XmlElement(name = "ReceiverNum")
    protected String receiverNum;
    @XmlElement(name = "SendDT")
    protected String sendDT;
    @XmlElement(name = "RefKey")
    protected String refKey;
    @XmlElement(name = "SendState")
    protected int sendState;

    /**
     * sendKey �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSendKey() {
        return sendKey;
    }

    /**
     * sendKey �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSendKey(String value) {
        this.sendKey = value;
    }

    /**
     * id �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getID() {
        return id;
    }

    /**
     * id �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setID(String value) {
        this.id = value;
    }

    /**
     * sendFileName �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSendFileName() {
        return sendFileName;
    }

    /**
     * sendFileName �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSendFileName(String value) {
        this.sendFileName = value;
    }

    /**
     * sendPageCount �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getSendPageCount() {
        return sendPageCount;
    }

    /**
     * sendPageCount �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setSendPageCount(int value) {
        this.sendPageCount = value;
    }

    /**
     * successPageCount �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getSuccessPageCount() {
        return successPageCount;
    }

    /**
     * successPageCount �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setSuccessPageCount(int value) {
        this.successPageCount = value;
    }

    /**
     * sendResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSendResult() {
        return sendResult;
    }

    /**
     * sendResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSendResult(String value) {
        this.sendResult = value;
    }

    /**
     * senderNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSenderNum() {
        return senderNum;
    }

    /**
     * senderNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSenderNum(String value) {
        this.senderNum = value;
    }

    /**
     * receiveCorp �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReceiveCorp() {
        return receiveCorp;
    }

    /**
     * receiveCorp �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReceiveCorp(String value) {
        this.receiveCorp = value;
    }

    /**
     * receiverName �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReceiverName() {
        return receiverName;
    }

    /**
     * receiverName �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReceiverName(String value) {
        this.receiverName = value;
    }

    /**
     * receiverNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReceiverNum() {
        return receiverNum;
    }

    /**
     * receiverNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReceiverNum(String value) {
        this.receiverNum = value;
    }

    /**
     * sendDT �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSendDT() {
        return sendDT;
    }

    /**
     * sendDT �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSendDT(String value) {
        this.sendDT = value;
    }

    /**
     * refKey �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRefKey() {
        return refKey;
    }

    /**
     * refKey �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRefKey(String value) {
        this.refKey = value;
    }

    /**
     * sendState �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getSendState() {
        return sendState;
    }

    /**
     * sendState �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setSendState(int value) {
        this.sendState = value;
    }

}
